# Auto Sky Replace (Photoshop Script)

Script `auto-sky-replace.jsx` thay bầu trời tự động theo workflow:
1. Dựa trên **vùng chọn có sẵn** của bạn.
2. Tự động gọi **Select Sky** để nhận diện bầu trời.
3. Lấy **giao nhau** giữa vùng chọn ban đầu và vùng trời (loại bớt cây, mái nhà, cột điện...).
4. Mới yêu cầu chọn ảnh bầu trời để thay thế.

## Cách dùng nhanh

1. Mở ảnh trong Photoshop.
2. Tạo vùng chọn bao quanh khu vực trời (có thể rộng, script sẽ lọc lại vùng trời).
3. Vào `File > Scripts > Browse...` và chọn `auto-sky-replace.jsx`.
4. Chọn ảnh bầu trời mới khi hộp thoại xuất hiện.

## Script làm gì

- Kiểm tra ảnh đang mở và vùng chọn ban đầu.
- Tạo vùng chọn trời tự động bằng Select Sky.
- Giao vùng chọn ban đầu với vùng trời để chỉ giữ trời.
- Chèn ảnh trời mới, fit phủ canvas và tạo layer mask từ vùng chọn trời đã lọc.

## Cài script để dùng lâu dài

- **Windows**: copy `.jsx` vào `Presets/Scripts` của Photoshop.
- **macOS**: copy `.jsx` vào `Adobe Photoshop/Presets/Scripts`.
- Khởi động lại Photoshop để script xuất hiện trong `File > Scripts`.

## Lưu ý tương thích

- Chức năng lọc trời tự động cần Photoshop có hỗ trợ Select Sky.
- Nếu phiên bản không hỗ trợ, script tự fallback về vùng chọn gốc và thông báo rõ.
