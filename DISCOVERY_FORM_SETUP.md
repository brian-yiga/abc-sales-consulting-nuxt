# Discovery Form Setup Guide

## Overview
The Discovery Form is a modal component that allows visitors to request a discovery call with ABC Sales Consulting. It's integrated globally across all pages and is triggered by "Book a Discovery Call/Session" buttons.

## Features
- **Global Modal**: Accessible from any page via the `useDiscoveryForm()` composable
- **Form Validation**: All fields are required and validated before submission
- **Email Notifications**: Sends emails to both admin and the requester
- **User-Friendly**: Clean, professional UI with success/error messages

## Setup Instructions

### 1. Install Email Dependencies
The email sending uses `nodemailer`. Install it if not already installed:

```bash
npm install nodemailer
# or
yarn add nodemailer
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory (copy from `.env.example`):

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
```

#### Gmail Setup (Recommended for Development)
1. Enable 2-Factor Authentication: https://myaccount.google.com/security
2. Generate an App-Specific Password: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Copy the generated 16-character password
3. Paste the password as `EMAIL_PASSWORD` in your `.env.local`

#### Alternative Email Services
If using SendGrid, Mailgun, or other services, modify `server/api/send-discovery-email.post.ts` with the appropriate configuration.

### 3. How It Works

#### Components
- **`DiscoveryForm.vue`**: Modal component with form fields and validation
- **`useDiscoveryForm.ts`**: Composable to manage form state globally
- **`/server/api/send-discovery-email.post.ts`**: API endpoint to handle email sending

#### Form Flow
1. User clicks "Book a Discovery Call/Session" button
2. Modal opens with discovery form
3. User fills out form with:
   - Full Name
   - Business Email
   - Phone Number
   - Company Name
   - Industry
   - Sales Team Size
   - Main Sales Challenge (textarea)
   - Preferred Call Time
   - Consent checkbox
4. On submit:
   - Form data is validated
   - POST request sent to `/api/send-discovery-email`
   - Server sends emails to admin and user
   - Success message displayed
   - Form resets and closes after 3 seconds

### 4. Email Templates

#### Admin Email
Receives all form data for processing discovery calls.

#### User Email
Receives confirmation that their request was received and that the team will contact them soon.

### 5. Using the Form Programmatically

Open the discovery form from any component:

```vue
<script setup>
const { openForm } = useDiscoveryForm();

const handleClick = () => {
  openForm();
};
</script>

<template>
  <button @click="handleClick">Book Now</button>
</template>
```

### 6. Styling

The form uses Tailwind CSS with ABC Sales Consulting brand colors:
- Primary: `abc-green` (#7cbc56)
- Secondary: `abc-navy` (#050038)
- Accent: `abc-orange` (#db8f3d)

To customize, edit the color values in `components/DiscoveryForm.vue` or update the theme in `nuxt.config.ts`.

### 7. Troubleshooting

**Form not submitting?**
- Check that `EMAIL_USER` and `EMAIL_PASSWORD` are set in `.env.local`
- Check browser console for error messages
- Verify the API endpoint is accessible: `POST /api/send-discovery-email`

**Emails not sending?**
- Verify email credentials are correct
- Check that Gmail's App-Specific Password is being used (not the main password)
- Check server logs for error messages
- Ensure 2FA is enabled on Gmail account

**Modal not appearing?**
- Verify `DiscoveryForm.vue` is properly imported in `app.vue`
- Check that `useDiscoveryForm()` composable is available
- Open browser DevTools and check for console errors

### 8. Production Deployment

When deploying to production:

1. **Add environment variables** to your hosting platform (Vercel, Netlify, etc.)
   - Set `EMAIL_USER` and `EMAIL_PASSWORD` in the deployment settings

2. **Use a transactional email service**:
   - Recommended: SendGrid, Mailgun, or AWS SES
   - More reliable than Gmail for production
   - Better deliverability rates
   - Update `server/api/send-discovery-email.post.ts` with service credentials

3. **Add error tracking**:
   - Consider integrating Sentry or similar for error monitoring
   - Log failed email submissions for debugging

4. **Rate limiting**:
   - Consider adding rate limiting to prevent abuse
   - Add CAPTCHA if needed (e.g., reCAPTCHA)

5. **Email templates**:
   - Consider using a template engine like Handlebars for more professional emails
   - Add company branding and logo to emails

## Files Modified

- `components/DiscoveryForm.vue` - Form modal component
- `composables/useDiscoveryForm.ts` - Form state management
- `server/api/send-discovery-email.post.ts` - Email handler
- `app.vue` - Global form initialization
- `components/content/HomePage.vue` - Integration with home page
- `pages/why-abc/team.vue` - Book button integration
- `pages/why-abc/methodology.vue` - Book button integration
- `pages/services.vue` - Book button integration
- `pages/case-studies.vue` - Book button integration
- `.env.example` - Environment variable template

## Support

For issues or questions, check the browser console for errors and verify all environment variables are correctly set.
