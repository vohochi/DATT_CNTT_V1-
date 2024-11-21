export interface IProduct {
  code: string; // Mã sản phẩm
  name: string; // Tên sản phẩm
  slug: string; // Slug cho URL
  type: 'PRODUCT'; // Loại sản phẩm (trong trường hợp này là 'PRODUCT')
  short_description: string; // Mô tả ngắn
  description: string; // Mô tả chi tiết
  thumbnail: number; // ID hình ảnh (hoặc URL nếu sử dụng hình ảnh từ ID)
  price: number; // Giá sản phẩm
  width: number; // Chiều rộng sản phẩm
  length: number; // Chiều dài sản phẩm
  height: number; // Chiều cao sản phẩm
  status: number; // Trạng thái sản phẩm (1 là có sẵn, 0 là không có sẵn)
}
