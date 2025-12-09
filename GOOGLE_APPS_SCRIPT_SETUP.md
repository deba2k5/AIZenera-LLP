# Google Apps Script Setup for Contact Form

## Step 1: Create a Google Sheet

1. Go to https://sheets.google.com
2. Create a new spreadsheet
3. Name it "AIZENERA Contact Form Responses"
4. In the first row, add these headers:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Phone
   - E1: Subject
   - F1: Message

## Step 2: Create Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Append the data to the sheet
    sheet.appendRow([
      data.timestamp || new Date(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.subject || '',
      data.message || ''
    ]);
    
    // Send email notification to aizenera2025@gmail.com
    var emailBody = 
      "New Contact Form Submission\n\n" +
      "Name: " + data.name + "\n" +
      "Email: " + data.email + "\n" +
      "Phone: " + data.phone + "\n" +
      "Subject: " + data.subject + "\n\n" +
      "Message:\n" + data.message + "\n\n" +
      "Timestamp: " + data.timestamp;
    
    MailApp.sendEmail({
      to: "aizenera2025@gmail.com",
      subject: "New Contact Form: " + data.subject,
      body: emailBody
    });
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function
function testDoPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: "Test User",
        email: "test@example.com",
        phone: "+91 1234567890",
        subject: "Test Subject",
        message: "This is a test message"
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

## Step 3: Deploy the Script

1. Click the **Deploy** button (top right)
2. Select **New deployment**
3. Click the gear icon ⚙️ next to "Select type"
4. Choose **Web app**
5. Set the following:
   - **Description**: Contact Form Handler
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
6. Click **Deploy**
7. Click **Authorize access** and follow the prompts
8. Copy the **Web app URL** (it looks like: `https://script.google.com/macros/s/...../exec`)

## Step 4: Update Contact.tsx

Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL'` in Contact.tsx with your copied Web app URL.

Example:
```typescript
const response = await fetch('https://script.google.com/macros/s/AKfycbxxx.../exec', {
```

## Step 5: Test

1. Save all changes
2. Go to your website's contact page
3. Fill out and submit the form
4. Check your Google Sheet for the new row
5. Check aizenera2025@gmail.com for the email notification

## Troubleshooting

- If you get permission errors, make sure you authorized the script in Step 3
- If emails don't arrive, check Gmail spam folder
- Test the script using the `testDoPost()` function in Apps Script editor
- Make sure the Web app is deployed with "Anyone" access

## Benefits

✅ All contact form data saved to Google Sheets
✅ Email notification sent to aizenera2025@gmail.com
✅ Free (no EmailJS subscription needed)
✅ Works with any domain (including localhost)
✅ Easy to view and manage submissions
