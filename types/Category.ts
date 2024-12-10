export interface Category {
  store_id: number; // ID của cửa hàng
  parent_id: number | null; // ID danh mục cha (nếu có)
  id: number; // ID danh mục
  code: string; // Mã danh mục
  lang: string; // Ngôn ngữ
  name: string; // Tên danh mục
  slug: string; // Đường dẫn (slug)
  img_id: number | null; // ID hình ảnh (nếu có)
  is_active: number; // Trạng thái hoạt động (1 = hoạt động, 0 = không)
  created_at: string; // Ngày tạo (chuỗi định dạng ngày giờ)
  updated_at: string; // Ngày cập nhật (chuỗi định dạng ngày giờ)
}
