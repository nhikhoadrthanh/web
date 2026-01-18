// Google Apps Script Code for DrThanh Website
// 1. In your Google Sheet, go to Extensions > Apps Script.
// 2. Paste this code.
// 3. Save and Deploy as Web App (Permissions: Anyone).

const SHEET_ID = '1CxJJM1EDluF_twam5olALE2jUbPDDEDvS7uStVcGl10'; // ID from your provided URL
const EMAIL_RECIPIENT = 'sangcm69@gmail.com';

function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        const doc = SpreadsheetApp.openById(SHEET_ID);
        const data = JSON.parse(e.postData.contents);

        // Determine sheet based on 'formType'
        let sheetName = 'Leads'; // Default for emails
        if (data.formType === 'booking') sheetName = 'Bookings';

        let sheet = doc.getSheetByName(sheetName);
        if (!sheet) {
            sheet = doc.insertSheet(sheetName);
            // Create Headers if new sheet
            if (sheetName === 'Bookings') {
                sheet.appendRow(['Timestamp', 'Parent Name', 'Phone', 'Child Info', 'Reason', 'Preferred Date', 'Status']);
            } else {
                sheet.appendRow(['Timestamp', 'Name', 'Email', 'Resource Requested', 'Status']);
            }
        }

        const timestamp = new Date();

        if (sheetName === 'Bookings') {
            sheet.appendRow([
                timestamp,
                data.name,
                "'" + data.phone, // Force string for phone
                data.childInfo,
                data.reason,
                data.date,
                'New'
            ]);

            // Send Email Notification
            MailApp.sendEmail({
                to: EMAIL_RECIPIENT,
                subject: "[Website DrThanh] Khách đặt lịch mới: " + data.name,
                htmlBody: `
          <h3>Có khách đăng ký khám mới!</h3>
          <p><strong>Họ tên:</strong> ${data.name}</p>
          <p><strong>SĐT:</strong> ${data.phone}</p>
          <p><strong>Bé:</strong> ${data.childInfo}</p>
          <p><strong>Lý do:</strong> ${data.reason}</p>
          <p><strong>Thời gian k.mong:</strong> ${data.date}</p>
          <p><em>Vui lòng kiểm tra Google Sheet để xử lý.</em></p>
        `
            });

        } else {
            // Leads
            sheet.appendRow([
                timestamp,
                data.name,
                data.email,
                data.resource,
                'New'
            ]);

            MailApp.sendEmail({
                to: EMAIL_RECIPIENT,
                subject: "[Website DrThanh] Tài liệu mới được tải: " + data.resource,
                htmlBody: `
          <h3>Khách hàng tải tài liệu</h3>
          <p><strong>Họ tên:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Tài liệu:</strong> ${data.resource}</p>
        `
            });
        }

        return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (e) {
        return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: e.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}
