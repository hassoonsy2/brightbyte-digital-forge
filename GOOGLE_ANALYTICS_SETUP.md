# Google Analytics Setup Guide

This guide explains how to set up Google Analytics 4 (GA4) for the Bright-Byte website.

## 🚀 Quick Setup

### 1. Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring" or "Create Account"
3. Set up your account:
   - Account name: `Bright-Byte Digital Forge`
   - Property name: `Bright-Byte Website`
   - Reporting time zone: `Europe/Amsterdam`
   - Currency: `EUR`

### 2. Get Your Tracking ID

1. In your GA4 property, go to **Admin** → **Data Streams**
2. Click **Add stream** → **Web**
3. Enter your website URL: `https://bright-byte.co`
4. Give it a name: `Bright-Byte Website`
5. Copy your **Measurement ID** (starts with `G-`)

### 3. Update the Code

Replace `G-XXXXXXXXXX` in these files with your actual Measurement ID:

#### `index.html`
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ACTUAL-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR-ACTUAL-ID', {
    page_title: document.title,
    page_location: window.location.href
  });
</script>
```

#### `src/utils/analytics.ts`
```typescript
export const GA_TRACKING_ID = 'G-YOUR-ACTUAL-ID'; // Replace with your actual GA4 tracking ID
```

## 🔧 Features Implemented

### Cookie Consent Integration
- Google Analytics only loads when users accept cookies
- GDPR compliant implementation
- Respects user privacy choices

### Automatic Tracking
- **Page Views**: Tracks all route changes
- **Language Changes**: Tracks when users switch languages
- **Form Submissions**: Tracks contact form submissions
- **Project Views**: Tracks portfolio project clicks
- **Button Clicks**: Tracks important button interactions

### Custom Events
- `page_view`: Automatic page tracking
- `language_change`: When users change language
- `form_submit`: Contact form submissions
- `project_view`: Portfolio project views
- `button_click`: Important button clicks
- `consultation_request`: Consultation requests

## 📊 Analytics Dashboard

Once set up, you can view analytics data in your Google Analytics dashboard:

### Key Metrics to Monitor
- **Users**: Total unique visitors
- **Sessions**: Total visits to your site
- **Page Views**: Total pages viewed
- **Bounce Rate**: Percentage of single-page sessions
- **Session Duration**: Average time spent on site
- **Traffic Sources**: Where visitors come from
- **Device Categories**: Desktop vs Mobile usage
- **Language Preferences**: English vs Dutch usage

### Custom Reports
- **Portfolio Performance**: Which projects get most views
- **Contact Form Conversion**: Form submission rates
- **Language Usage**: English vs Dutch preference
- **User Journey**: How users navigate through the site

## 🔒 Privacy & GDPR Compliance

### Cookie Consent
- Users must explicitly accept cookies before GA loads
- Clear explanation of what cookies are used for
- Easy option to decline cookies
- Choice is remembered in localStorage

### Data Protection
- IP anonymization enabled
- Google Signals disabled for privacy
- No personal data collection
- GDPR compliant implementation

### Cookie Types Used
- **Essential Cookies**: Language preference, cookie consent choice
- **Analytics Cookies**: Google Analytics tracking (only if accepted)

## 🛠️ Development

### Testing Analytics
1. Open browser developer tools
2. Go to **Console** tab
3. Check for `gtag` function availability
4. Look for analytics events in **Network** tab

### Debug Mode
To enable debug mode, add this to your analytics config:
```typescript
gtag('config', GA_TRACKING_ID, {
  debug_mode: true,
  // ... other config
});
```

## 📈 Advanced Configuration

### Enhanced Ecommerce (Future)
If you plan to add ecommerce features:
```typescript
gtag('config', GA_TRACKING_ID, {
  enhanced_ecommerce: true,
});
```

### Custom Dimensions
Track additional data like:
- User type (business/individual)
- Service interest
- Project budget range

### Goals & Conversions
Set up conversion goals for:
- Contact form submissions
- Consultation requests
- Portfolio project views
- Service page visits

## 🚨 Troubleshooting

### Common Issues

**Analytics not loading:**
- Check if user accepted cookies
- Verify Measurement ID is correct
- Check browser console for errors

**Events not tracking:**
- Ensure `gtag` function is available
- Check if cookies are accepted
- Verify event names are correct

**Data not appearing:**
- Wait 24-48 hours for data to appear
- Check real-time reports for immediate data
- Verify property is correctly configured

### Debug Steps
1. Check browser console for errors
2. Verify Measurement ID format (`G-XXXXXXXXXX`)
3. Test with cookie consent accepted
4. Check Network tab for GA requests
5. Use GA4 DebugView for real-time testing

## 📞 Support

If you need help setting up Google Analytics:
1. Check Google Analytics Help Center
2. Contact Bright-Byte development team
3. Review this documentation

---

**Note**: Remember to replace `G-XXXXXXXXXX` with your actual Google Analytics Measurement ID before deploying to production!
