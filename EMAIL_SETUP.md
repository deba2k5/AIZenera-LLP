# Email Configuration Guide

To make the contact form send emails to `aizenera2025@gmail.com`, follow these steps:

## Setup EmailJS Service

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account
   - Verify your email

2. **Create an Email Service**
   - Log in to EmailJS dashboard
   - Go to "Email Services"
   - Click "Add Service"
   - Select "Gmail" as your service
   - Connect your Gmail account (aizenera2025@gmail.com)
   - Copy the Service ID

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Set up template with the following variables:
     ```
     Subject: New Contact: {{subject}} from {{from_name}}
     
     Body:
     Name: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone}}
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```
   - Copy the Template ID

4. **Update Contact.tsx**
   - Open `src/pages/Contact.tsx`
   - Replace `'YOUR_PUBLIC_KEY_HERE'` with your EmailJS Public Key
   - Replace `'service_aizenera'` with your Service ID
   - Replace `'template_contact'` with your Template ID

## Example Configuration

```typescript
// In src/pages/Contact.tsx, line ~35
emailjs.init({
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY', // Get from EmailJS dashboard
});

// In handleSubmit function, line ~70
const result = await emailjs.send(
  'service_YOUR_SERVICE_ID',    // Replace with your Service ID
  'template_YOUR_TEMPLATE_ID',  // Replace with your Template ID
  templateParams
);
```

## Getting Your Credentials

1. **Public Key**: Dashboard → Account → Public Key
2. **Service ID**: Email Services → (your Gmail service) → Service ID
3. **Template ID**: Email Templates → (your template) → Template ID

## Testing

1. Fill out the contact form with test data
2. Click "Send Message"
3. The email should arrive at aizenera2025@gmail.com within seconds

## Notes

- EmailJS free tier allows 200 emails per month
- All form data will be sent to the configured email address
- The sender information (name, email, phone) will be included in the email

For more help, visit: https://www.emailjs.com/docs/
