# d-n-trading-tool

## Prompt mẫu cho Codex (GPT-5.5): Tạo Photoshop UXP Extension thay bầu trời bằng AI

Bạn là kỹ sư plugin Photoshop UXP cấp cao. Hãy tạo **một UXP Extension hoàn chỉnh** cho Photoshop với mục tiêu:
- Tự động phát hiện và chọn vùng bầu trời bằng AI.
- Tự động thay thế vùng bầu trời bằng ảnh có sẵn trong một thư mục trên máy người dùng.

### Yêu cầu chức năng
1. UI panel UXP gồm:
   - Nút chọn thư mục chứa ảnh bầu trời (`Select Sky Folder`).
   - Dropdown hoặc danh sách để chọn ảnh bầu trời cụ thể.
   - Nút `Auto Detect Sky + Replace`.
   - Tùy chọn `Feather` (px), `Opacity`, `Blend Mode`, `Scale`, `Position Y`.
   - Nút `Random Sky` để chọn ngẫu nhiên một ảnh từ thư mục.

2. Luồng xử lý chính:
   - Lấy document đang mở trong Photoshop.
   - Dùng AI để tạo mask vùng bầu trời:
     - Ưu tiên gọi API segmentation (ví dụ: cloud vision/segmentation endpoint) nếu có API key.
     - Nếu không có API thì fallback dùng Photoshop `Select > Sky` qua batchPlay.
   - Chuyển mask thành selection.
   - Đặt ảnh bầu trời mới thành layer riêng, scale cho phủ canvas.
   - Tạo layer mask để chỉ thay ở vùng bầu trời.
   - Áp blend/opacity theo thông số UI.
   - Giữ vùng tiền cảnh (nhà, cây, người) không bị lem.

3. Quản lý file local:
   - Đọc danh sách file `.jpg`, `.jpeg`, `.png`, `.webp` trong thư mục đã chọn.
   - Có validate khi thư mục rỗng hoặc file lỗi.
   - Ghi nhớ thư mục gần nhất bằng storage của UXP.

4. Kiến trúc & mã nguồn:
   - Cung cấp đầy đủ cấu trúc dự án:
     - `manifest.json`
     - `index.html`
     - `src/main.js`
     - `src/ui.js`
     - `src/ai.js`
     - `src/photoshop.js`
     - `src/storage.js`
     - `styles.css`
   - Tách module rõ ràng, code sạch, có comment ở các đoạn batchPlay khó.
   - Có hàm `replaceSkyWithAI(options)` là entry point chính.

5. Kỹ thuật Photoshop UXP bắt buộc:
   - Dùng `require('photoshop').action.batchPlay` cho lệnh Photoshop.
   - Dùng `core.executeAsModal` cho các thao tác chỉnh sửa document.
   - Xử lý history state hợp lý (gộp thành một bước undo nếu có thể).

6. Trải nghiệm người dùng & lỗi:
   - Hiển thị progress/loading trong lúc AI xử lý.
   - Toast/log lỗi rõ ràng (mất mạng, API fail, không có document, không tìm thấy sky).
   - Fallback tự động nếu AI endpoint thất bại.

7. Bảo mật:
   - Không hard-code API key.
   - Hướng dẫn cách truyền API key qua file config/env an toàn.

8. Đầu ra mong muốn:
   - In toàn bộ mã nguồn theo từng file (đặt trong markdown code block, có tên file).
   - Kèm hướng dẫn cài extension vào Photoshop (Developer Mode, Load UXP plugin).
   - Kèm checklist test thủ công.
   - Kèm mục “Known limitations” và “Next improvements”.

### Ràng buộc
- Không dùng CEP, chỉ UXP.
- Ưu tiên API UXP mới nhất tương thích Photoshop hiện đại.
- Nếu API AI bên ngoài không khả dụng, vẫn phải chạy được bằng fallback `Select Sky`.
- Viết code thực dụng, chạy được ngay, không pseudo-code.
