# EmailJS Setup Instructions for Bright-Byte Contact Form

## Overview
The contact form is configured to send emails to `info@bright-byte.co` and automatically send confirmation emails to users. Follow these steps to set up EmailJS.

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your `info@bright-byte.co` email account
5. Note down the **Service ID** (e.g., `service_brightbyte`)

## Step 3: Create Email Templates

### Template 1: Main Contact Form (to info@bright-byte.co)
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Set Template Name: "Bright-Byte Contact Form"
4. Configure:
   - **To Email**: `info@bright-byte.co`
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **Subject**: `New Contact Form Submission: {{subject}}`
   - **Content**:
     ```
     You have received a new message from the Bright-Byte website contact form.

     From: {{from_name}}
     Email: {{from_email}}
     Subject: {{subject}}

     Message:
     {{message}}

     Please respond within 24 hours as per our commitment to clients.
     ```
5. Note down the **Template ID** (e.g., `template_brightbyte`)

### Template 2: Auto-Reply (to user)
1. Create another template
2. Set Template Name: "Auto-Reply Confirmation"
3. Configure:
   - **To Email**: `{{to_email}}`
   - **From Name**: `Bright-Byte Team`
   - **From Email**: `info@bright-byte.co`
   - **Subject**: `Thank you for contacting Bright-Byte`
   - **Content**:
     ```
     Dear {{to_name}},

     Thank you for reaching out to us! We have received your message and truly appreciate your interest in Bright-Byte.

     Our team will review your inquiry and get back to you within 24 hours. In the meantime, feel free to explore our services and blog for more insights into our work.

     If you have any urgent questions, please don't hesitate to call us at +31657694468.

     Best regards,
     The Bright-Byte Team

     ---
     This is an automated message. Please do not reply to this email.
     ```
4. Note down the **Template ID** (e.g., `template_autoreply`)

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (e.g., `user_abc123def456`)

## Step 5: Update Environment Variables
Create a `.env.local` file in your project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_autoreply_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Test the Contact Form
1. Fill out the contact form on your website
2. Check that:
   - Email arrives at `info@bright-byte.co`
   - User receives auto-reply confirmation
   - Form resets after successful submission

## Troubleshooting

### Common Issues:
1. **Emails not sending**: Check service connection and template IDs
2. **Auto-reply not working**: Verify second template is configured correctly
3. **Rate limiting**: EmailJS free plan has monthly limits (200 emails/month)

### Fallback Behavior:
If EmailJS fails, the form will:
1. Open user's default email client
2. Pre-fill with contact information
3. Show error message explaining the fallback

## Security Notes:
- Public Key is safe to expose in frontend code
- Never expose your private EmailJS keys
- Consider upgrading to paid plan for production use

## Monthly Limits (Free Plan):
- 200 emails per month
- Consider paid plan for higher volume

---

For any issues with setup, contact the development team or refer to [EmailJS Documentation](https://www.emailjs.com/docs/). 