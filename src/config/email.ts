// EmailJS Configuration
export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id_here',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id_here',
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID || 'your_autoreply_template_id_here',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY_HERE',
};

// Log configuration status (for debugging)
console.log('EmailJS Environment Variables:', {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ? '✓ Set' : '✗ Missing',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ? '✓ Set' : '✗ Missing',
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID ? '✓ Set' : '✗ Missing',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? '✓ Set' : '✗ Missing',
}); 