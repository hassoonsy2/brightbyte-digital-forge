import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMicrosoft } from 'react-icons/fa';
import {
  SiAmazonwebservices,
  SiAdobe,
  SiAnthropic,
  SiExpo,
  SiFigma,
  SiGoogle,
  SiLangchain,
  SiNvidia,
  SiOpenai,
  SiSupabase,
} from 'react-icons/si';

const NODE_COUNT = 138;
const BASE_SPHERE_RADIUS = 190;
const MAX_CONNECTIONS_PER_NODE = 3;
const ROTATION_SPEED = 0.00034; // radians per ms
const WAVE_SPEED = 0.0024;
const INTENSITY_DECAY = 0.0052;
const BASE_PERSPECTIVE = 760;
const TARGET_FRAME_INTERVAL = 1000 / 50;

type BrandIcon = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

type PartnerBrand = {
  name: string;
  icon: BrandIcon;
  iconColor: string;
};

const PARTNER_BRANDS: PartnerBrand[] = [
  { name: 'Google', icon: SiGoogle, iconColor: '#4285F4' },
  { name: 'Anthropic', icon: SiAnthropic, iconColor: '#D97757' },
  { name: 'OpenAI', icon: SiOpenai, iconColor: '#F8FAFC' },
  { name: 'Supabase', icon: SiSupabase, iconColor: '#3ECF8E' },
  { name: 'Expo Go', icon: SiExpo, iconColor: '#F8FAFC' },
  { name: 'LangChain', icon: SiLangchain, iconColor: '#8AB4FF' },
  { name: 'Adobe', icon: SiAdobe, iconColor: '#FF0000' },
  { name: 'Figma', icon: SiFigma, iconColor: '#A259FF' },
  { name: 'Amazon AWS', icon: SiAmazonwebservices, iconColor: '#FF9900' },
  { name: 'Microsoft Azure', icon: FaMicrosoft, iconColor: '#0078D4' },
  { name: 'Nvidia', icon: SiNvidia, iconColor: '#76B900' },
];

type SpherePoint = {
  x: number;
  y: number;
  z: number;
  id: number;
};

type ProjectedPoint = {
  x: number;
  y: number;
  z: number;
  scale: number;
  visibility: number;
  intensity: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

// Generate Fibonacci sphere points
const generatePoints = (count: number, radius: number) => {
  const points: SpherePoint[] = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;

  for (let i = 0; i < count; i++) {
    const theta = (2 * Math.PI * i) / goldenRatio;
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    points.push({ x, y, z, id: i });
  }

  return points;
};

const buildConnections = (
  points: SpherePoint[],
  maxDistance: number,
  maxConnectionsPerNode: number,
) => {
  const pairs: { a: number; b: number; distSq: number }[] = [];
  const maxDistanceSq = maxDistance * maxDistance;

  for (let i = 0; i < points.length; i++) {
    const a = points[i];
    for (let j = i + 1; j < points.length; j++) {
      const b = points[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dz = a.z - b.z;
      const distSq = dx * dx + dy * dy + dz * dz;
      if (distSq <= maxDistanceSq) {
        pairs.push({ a: i, b: j, distSq });
      }
    }
  }

  pairs.sort((first, second) => first.distSq - second.distSq);

  const degree = new Uint8Array(points.length);
  const connections: [number, number][] = [];

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    if (degree[pair.a] >= maxConnectionsPerNode || degree[pair.b] >= maxConnectionsPerNode) {
      continue;
    }
    connections.push([pair.a, pair.b]);
    degree[pair.a] += 1;
    degree[pair.b] += 1;
  }

  return connections;
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const basePoints = useMemo(() => generatePoints(NODE_COUNT, BASE_SPHERE_RADIUS), []);
  const marqueeBrands = useMemo(() => [...PARTNER_BRANDS, ...PARTNER_BRANDS], []);
  const connections = useMemo(
    () => buildConnections(basePoints, BASE_SPHERE_RADIUS * 0.5, MAX_CONNECTIONS_PER_NODE),
    [basePoints],
  );
  const drawOrder = useMemo(
    () => Array.from({ length: basePoints.length }, (_, index) => index),
    [basePoints.length],
  );
  const animationRef = useRef<number>();
  const rotationRef = useRef(0);
  const intensitiesRef = useRef(new Float32Array(NODE_COUNT).fill(0));
  const wavePhaseRef = useRef(0);
  const hoverTargetRef = useRef<{ x: number; y: number } | null>(null);
  const hoverRef = useRef<{ x: number; y: number } | null>(null);
  const lastFrameRef = useRef(0);

  // Mouse handler
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    hoverTargetRef.current = {
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    hoverTargetRef.current = null;
    hoverRef.current = null;
  }, []);

  // Single animation loop on canvas for smoother rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    const projected: ProjectedPoint[] = basePoints.map(() => ({
      x: 0,
      y: 0,
      z: 0,
      scale: 1,
      visibility: 1,
      intensity: 0,
    }));

    let width = 1;
    let height = 1;
    let centerX = 0;
    let centerY = 0;
    let sphereRadius = BASE_SPHERE_RADIUS;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);

      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * devicePixelRatio);
      canvas.height = Math.floor(height * devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      centerX = width / 2;
      centerY = height / 2;
      const minRadius = width < 640 ? 145 : BASE_SPHERE_RADIUS;
      sphereRadius = Math.max(minRadius, Math.min(width, height) * 0.42);
    };

    const animate = (timestamp: number) => {
      if (document.hidden) {
        lastFrameRef.current = timestamp;
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const previousTime = lastFrameRef.current || timestamp;
      const elapsed = timestamp - previousTime;
      if (elapsed < TARGET_FRAME_INTERVAL) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const delta = clamp(elapsed, TARGET_FRAME_INTERVAL, 34);
      lastFrameRef.current = timestamp;

      const targetHover = hoverTargetRef.current;
      const smoothHover = hoverRef.current;

      if (targetHover) {
        if (!smoothHover) {
          hoverRef.current = { ...targetHover };
        } else {
          const blend = 1 - Math.exp(-delta * 0.02);
          smoothHover.x += (targetHover.x - smoothHover.x) * blend;
          smoothHover.y += (targetHover.y - smoothHover.y) * blend;
        }
      } else if (smoothHover) {
        const fade = Math.exp(-delta * 0.03);
        smoothHover.x *= fade;
        smoothHover.y *= fade;
        if (Math.hypot(smoothHover.x, smoothHover.y) < 0.5) {
          hoverRef.current = null;
        }
      }

      rotationRef.current += delta * ROTATION_SPEED;
      wavePhaseRef.current = (wavePhaseRef.current + delta * WAVE_SPEED) % (Math.PI * 2);

      const decay = Math.exp(-delta * INTENSITY_DECAY);
      const scaleFactor = sphereRadius / BASE_SPHERE_RADIUS;
      const perspective = BASE_PERSPECTIVE + sphereRadius;

      const cosY = Math.cos(rotationRef.current);
      const sinY = Math.sin(rotationRef.current);
      const tiltX = 0.38;
      const cosTiltX = Math.cos(tiltX);
      const sinTiltX = Math.sin(tiltX);
      const hover = hoverRef.current;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < basePoints.length; i++) {
        const point = basePoints[i];
        const px = point.x * scaleFactor;
        const py = point.y * scaleFactor;
        const pz = point.z * scaleFactor;

        const rotatedX = px * cosY - pz * sinY;
        const rotatedZ = px * sinY + pz * cosY;
        const rotatedY = py * cosTiltX - rotatedZ * sinTiltX;
        const depthZ = py * sinTiltX + rotatedZ * cosTiltX;

        let intensity = intensitiesRef.current[i] * decay;

        if (hover) {
          const dx = rotatedX - hover.x;
          const dy = rotatedY - hover.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 95) {
            const activation = 1 - distance / 95;
            intensity = Math.max(intensity, activation * activation);
          }

          const waveRadius = 60 + (wavePhaseRef.current / (Math.PI * 2)) * 170;
          const waveDistance = Math.abs(distance - waveRadius);
          if (distance < 240 && waveDistance < 18) {
            intensity = Math.max(intensity, (1 - waveDistance / 18) * 0.55);
          }
        }

        intensity = clamp(intensity, 0, 1);
        intensitiesRef.current[i] = intensity;

        const depthScale = perspective / (perspective - depthZ);
        const x = centerX + rotatedX * depthScale;
        const y = centerY + rotatedY * depthScale;
        const visibility = clamp((depthZ + sphereRadius) / (sphereRadius * 2), 0.12, 1);

        const projectedPoint = projected[i];
        projectedPoint.x = x;
        projectedPoint.y = y;
        projectedPoint.z = depthZ;
        projectedPoint.scale = depthScale;
        projectedPoint.visibility = visibility;
        projectedPoint.intensity = intensity;
      }

      ctx.lineCap = 'round';
      for (let i = 0; i < connections.length; i++) {
        const [a, b] = connections[i];
        const first = projected[a];
        const second = projected[b];

        const activity = Math.max(first.intensity, second.intensity);
        const depth = (first.visibility + second.visibility) * 0.5;
        const alpha = 0.04 + depth * 0.12 + activity * 0.24;

        if (alpha < 0.05) continue;

        ctx.beginPath();
        ctx.moveTo(first.x, first.y);
        ctx.lineTo(second.x, second.y);
        ctx.strokeStyle = activity > 0.58
          ? `rgba(207,243,255,${clamp(alpha, 0, 0.7)})`
          : `rgba(74,177,255,${clamp(alpha, 0, 0.55)})`;
        ctx.lineWidth = 0.5 + depth * 0.7 + activity * 0.6;
        ctx.stroke();
      }

      drawOrder.sort((a, b) => projected[a].z - projected[b].z);

      for (let i = 0; i < drawOrder.length; i++) {
        const point = projected[drawOrder[i]];
        const activity = point.intensity;
        const radius = (2 + point.scale * 2.4) * (0.82 + point.visibility * 0.36);
        const baseAlpha = 0.22 + point.visibility * 0.55;

        if (activity > 0.15) {
          const glowRadius = radius * (1.8 + activity * 1.2);
          ctx.beginPath();
          ctx.arc(point.x, point.y, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(95,210,255,${0.06 + activity * 0.18})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        if (activity > 0.7) {
          ctx.fillStyle = `rgba(246,252,255,${Math.min(1, 0.75 + activity * 0.25)})`;
        } else if (activity > 0.4) {
          ctx.fillStyle = `rgba(141,223,255,${0.55 + activity * 0.4})`;
        } else {
          ctx.fillStyle = `rgba(86,188,255,${baseAlpha + activity * 0.3})`;
        }
        ctx.fill();

        ctx.lineWidth = 0.8 + activity * 0.9;
        ctx.strokeStyle = activity > 0.6
          ? 'rgba(235,250,255,0.88)'
          : `rgba(73,142,187,${0.42 + activity * 0.25})`;
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    intensitiesRef.current.fill(0);
    lastFrameRef.current = 0;
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [basePoints, connections, drawOrder]);

  return (
    <section className="relative min-h-[100svh] bg-[#030308] overflow-hidden flex items-start lg:items-center pt-24 sm:pt-28 lg:pt-0">
      {/* Ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.06] tracking-tight" style={{ letterSpacing: '-0.02em' }}>
              Shaping Tomorrow
              <br />
              <span className="text-white">with Advanced</span>
              <br />
              <span className="text-[#3b82f6]">Technology</span>
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#9ca3af] max-w-md mx-auto lg:mx-0 leading-relaxed">
              Pioneering AI consulting, software development, and automation to empower your digital future.
            </p>

            <div className="mt-7 sm:mt-8 lg:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-premium px-6 sm:px-8 py-3.5 sm:py-4"
                >
                  Get Started
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-secondary px-6 sm:px-8 py-3.5 sm:py-4"
                >
                  Our Services
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right - 3D Orb */}
          <div
            ref={containerRef}
            className="relative h-[380px] sm:h-[460px] md:h-[600px] flex items-center justify-center cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1000px' }}
          >
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-8 md:mt-10"
        >
          <div className="text-center mb-4">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#60a5fa] font-medium">
              Partners
            </span>
          </div>

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <motion.div
              className="flex w-max gap-3 md:gap-4"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 26, ease: 'linear', repeat: Infinity }}
            >
              {marqueeBrands.map((partner, index) => {
                const Icon = partner.icon;
                return (
                  <div
                    key={`${partner.name}-${index}`}
                    className="min-w-[160px] md:min-w-[190px] h-14 md:h-16 px-2 md:px-3 flex items-center gap-2.5 md:gap-3"
                  >
                    <Icon
                      className="w-5 h-5 md:w-6 md:h-6 shrink-0 drop-shadow-[0_0_10px_rgba(59,130,246,0.25)]"
                      style={{ color: partner.iconColor }}
                    />
                    <span className="text-[#d7e6ff] text-sm md:text-base font-medium tracking-tight leading-tight whitespace-nowrap">
                      {partner.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
