# HƯỚNG DẪN KẾT NỐI GOOGLE SHEETS

Để Form trên website tự động gửi dữ liệu về [Google Sheet của bạn](https://docs.google.com/spreadsheets/d/1CxJJM1EDluF_twam5olALE2jUbPDDEDvS7uStVcGl10), bạn cần làm theo các bước sau.

## Bước 1: Cài đặt Script trên Google Sheet
1. Mở link Google Sheet của bạn.
2. Trên thanh menu, chọn **Extensions (Tiện ích mở rộng)** > **Apps Script**.
3. Xóa hết mã cũ trong file `Code.gs`.
4. Mở file `d:\Web DrThanh\GOOGLE_SCRIPT.js` trên máy tính, copy toàn bộ nội dung.
5. Dán vào trình soạn thảo Apps Script.
6. Nhấn **Save** (biểu tượng đĩa mềm 💾).

## Bước 2: Xuất bản (Deploy)
1. Ở góc trên bên phải, nhấn nút **Deploy (Triển khai)** > **New deployment (Tùy chọn triển khai mới)**.
2. Nhấn biểu tượng bánh răng ⚙️ (Select type) > chọn **Web app**.
3. Điền thông tin:
   - **Description**: Web API
   - **Execute as**: `Me (your_email@gmail.com)` (Giữ nguyên)
   - **Who has access**: Chọn **Anyone (Bất kỳ ai)**. -> **RẤT QUAN TRỌNG**
4. Nhấn **Deploy**.
5. Google sẽ yêu cầu cấp quyền (Authorize access) -> Chọn Email của bạn -> Chọn **Advanced (Nâng cao)** -> Chọn **Go to ... (unsafe)** -> Nhấn **Allow**.
6. Copy dòng **Web app URL** (có dạng `https://script.google.com/macros/s/.../exec`).

## Bước 3: Cập nhật Website
1. Mở file `d:\Web DrThanh\js\main.js` bằng Notepad hoặc VS Code.
2. Tìm dòng 6:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'PASTE_YOUR_WEB_APP_URL_HERE';
   ```
3. Dán link Web App URL bạn vừa copy vào giữa hai dấu nháy đơn.
   Ví dụ:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';
   ```
4. Lưu file lại.

## Bước 4: Kiểm tra
Mở file `booking.html`, điền thử thông tin và nhấn Gửi. Nếu hiện thông báo "Thành công!", hãy kiểm tra Google Sheet xem dữ liệu đã vào chưa.
