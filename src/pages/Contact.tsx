import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, CheckCircle, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('EmailJS Config:', emailConfig);
      
      const formData = new FormData(e.currentTarget);
      const firstName = formData.get('firstName') as string;
      const templateParams = {
        name: `${firstName} ${formData.get('lastName')}`,
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        time: new Date().toLocaleString('en-GB', { 
          timeZone: 'Europe/Amsterdam',
          dateStyle: 'short',
          timeStyle: 'short'
        }),
        reply_to: formData.get('email'),
      };

      console.log('Template Params:', templateParams);

      // Check if EmailJS is properly configured
      if (!emailConfig.serviceId || emailConfig.serviceId.includes('your_') || 
          !emailConfig.templateId || emailConfig.templateId.includes('your_') ||
          !emailConfig.publicKey || emailConfig.publicKey.includes('YOUR_')) {
        
        console.error('EmailJS not configured. Current config:', emailConfig);
        toast.error('Email service not configured yet. Please set up EmailJS credentials.');
        
        // Show alert with instructions
        alert(`EmailJS is not configured yet. Please:

1. Go to EmailJS.com and create an account
2. Set up your email service 
3. Create email templates
4. Create a .env.local file with your credentials:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id  
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_autoreply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

See EmailJS_Setup_Instructions.md for detailed steps.`);
        
        return;
      }

      // Send email to info@bright-byte.co
      console.log('Sending main email...');
      console.log('Using Service ID:', emailConfig.serviceId);
      console.log('Using Template ID:', emailConfig.templateId);
      console.log('Using Public Key:', emailConfig.publicKey);
      
      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );

      console.log('Main email result:', result);

      if (result.status === 200) {
        // Show success modal immediately after main email is sent
        setSubmittedName(firstName);
        setShowSuccessModal(true);
        
        // Reset form
        e.currentTarget.reset();

        // Try to send auto-reply (but don't let it block the success message)
        try {
          console.log('Sending auto-reply...');
          const autoReplyParams = {
            to_name: firstName,
            to_email: formData.get('email'),
            from_name: 'Bright-Byte Team',
            subject: 'Thank you for contacting Bright-Byte',
            message: `Dear ${firstName},

Thank you for reaching out to us! We have received your message and truly appreciate your interest in Bright-Byte.

Our team will review your inquiry and get back to you within 24 hours. In the meantime, feel free to explore our services and blog for more insights into our work.

If you have any urgent questions, please don't hesitate to call us at +31657694468.

Best regards,
The Bright-Byte Team

---
This is an automated message. Please do not reply to this email.`
          };

          console.log('Auto-reply params:', autoReplyParams);
          console.log('Using auto-reply template ID:', emailConfig.autoReplyTemplateId);

          const autoReplyResult = await emailjs.send(
            emailConfig.serviceId,
            emailConfig.autoReplyTemplateId,
            autoReplyParams,
            emailConfig.publicKey
          );

          console.log('Auto-reply result:', autoReplyResult);
          console.log('✅ Auto-reply sent successfully!');
          
        } catch (autoReplyError) {
          console.error('❌ Auto-reply failed, but main message was sent:', autoReplyError);
          // Don't show error to user since main email worked
        }
      }
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show detailed error information
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        toast.error(`Email Error: ${error.message}`);
      }
      
      // Fallback: Use mailto as backup
      const formData = new FormData(e.currentTarget);
      const subject = encodeURIComponent(`Contact Form: ${formData.get('subject')}`);
      const body = encodeURIComponent(`
Name: ${formData.get('firstName')} ${formData.get('lastName')}
Email: ${formData.get('email')}
Subject: ${formData.get('subject')}

Message:
${formData.get('message')}
      `);
      
      window.location.href = `mailto:info@bright-byte.co?subject=${subject}&body=${body}`;
      
      toast.error('There was an issue with our contact form. Your email client has been opened as a backup. We apologize for the inconvenience.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 animate-in slide-in-from-bottom-4">
            <div className="p-8 text-center">
              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              {/* Success Icon with Animation */}
              <div className="mb-6">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </div>
              
              {/* Success Message */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Thank you, {submittedName}! 🎉
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your message has been successfully sent to our team. We appreciate your interest in Bright-Byte and will get back to you within <span className="font-semibold text-blue-600">24 hours</span>.
              </p>
              
              {/* Additional Info */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center text-blue-700 text-sm">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>Confirmation email sent to your inbox</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Continue Exploring
                </Button>
                
                <div className="flex justify-center space-x-4 text-sm text-gray-500">
                  <a href="tel:+31657694468" className="hover:text-blue-600 transition-colors">
                    📞 Call us: +31657694468
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t('contactTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('contactDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('sendMessageTitle')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('firstName')}
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="w-full"
                        placeholder={t('firstNamePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('lastName')}
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="w-full"
                        placeholder={t('lastNamePlaceholder')}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('email')}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full"
                      placeholder={t('emailPlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('subject')}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full"
                      placeholder={t('subjectPlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      className="w-full min-h-[150px]"
                      placeholder={t('messagePlaceholder')}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('sending')}
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        {t('sendMessage')}
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contactInfoTitle')}</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{t('emailTitle')}</h3>
                        <a 
                          href="mailto:info@bright-byte.co" 
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          info@bright-byte.co
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{t('phoneTitle')}</h3>
                        <a 
                          href="tel:+31657694468" 
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          +31657694468
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{t('locationTitle')}</h3>
                        <p className="text-gray-600">Utrecht, The Netherlands</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time Notice */}
              <Card className="bg-blue-50 border-blue-200 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">{t('quickResponseTitle')}</h3>
                      <p className="text-blue-700 text-sm">
                        {t('quickResponseDescription')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="bg-white shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78144.97567806421!2d5.084076!3d52.090737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66f4339d665d5%3A0xa9bc3e4f8245c0f4!2sUtrecht%2C%20Netherlands!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact; 