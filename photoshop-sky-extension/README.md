# Auto Sky Replace (Photoshop Script)

Script `auto-sky-replace.jsx` giúp thay bầu trời tự động dựa trên **vùng chọn có sẵn** trong Photoshop.

## Cách dùng nhanh

1. Mở ảnh trong Photoshop.
2. Tạo vùng chọn cho khu vực bầu trời (Quick Selection, Select Sky, Pen Tool...).
3. Vào `File > Scripts > Browse...` và chọn file `auto-sky-replace.jsx`.
4. Chọn ảnh bầu trời mới khi hộp thoại xuất hiện.
5. Script sẽ:
   - thêm ảnh bầu trời vào tài liệu hiện tại,
   - fit ảnh phủ kín canvas,
   - tạo layer mask theo đúng vùng chọn.

## Cài script để dùng lâu dài

- **Windows**: copy `.jsx` vào thư mục `Presets/Scripts` của Photoshop.
- **macOS**: copy `.jsx` vào `Adobe Photoshop/Presets/Scripts`.
- Khởi động lại Photoshop để script xuất hiện trong menu `File > Scripts`.

## Lưu ý

- Script yêu cầu **đã có vùng chọn** trước khi chạy.
- Kết quả tốt nhất khi vùng chọn là phần bầu trời sạch (ít lẫn cây/tóc) và có feather nhẹ.
