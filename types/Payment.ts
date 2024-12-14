// Interface cho thông tin chi tiết của một payment history
export interface PaymentHistory {
  id: string;
  user_id: string;
  transaction_id: string;
  date: string; // "2024-12-13"
  type: string;
  method: string;
  status: string;
  total: number;
  balance: number;
  data: string;
  note: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Interface cho response pagination metadata
export interface PaymentHistoryMeta {
  pagination: {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links: {
      previous: string | null;
      current: string;
      next: string | null;
    }
  }
}

// Interface cho toàn bộ response từ API
export interface PaymentHistoryResponse {
  message: string;
  data: PaymentHistory[];
  meta: PaymentHistoryMeta;
}

// Interface cho error response
export interface PaymentHistoryError {
  message: string;
  error: [];
}

// Interface cho request body khi tạo payment history mới
export interface CreatePaymentHistoryRequest {
  user_id: number;
  transaction_id: string;
  date: string; // Format: "2024-12-13T03:51:00.332Z"
  type: "RECHARGE" | string; // Có thể thêm các type khác nếu có
  method: string;
  status: "FAIL" | "SUCCESS" | "PENDING"; // Các trạng thái có thể có
  total_pay: number;
  balance: number;
  data: string;
  note: string;
  is_active: boolean;
  created_by: number;
}

// Interface cho response khi tạo payment history thành công
export interface CreatePaymentHistoryResponse {
  message: string; // "Tạo lịch sử thanh toán thành công"
  data: PaymentHistory; // Sử dụng lại PaymentHistory interface đã tạo
}

// Interface cho response khi tạo payment history thất bại
export interface CreatePaymentHistoryError {
  message: string;
  error: {
    code: string;
    message: string;
  }[];
}

// Enum cho các loại payment type
export enum PaymentType {
  RECHARGE = "RECHARGE",
}

// Enum cho các trạng thái payment
export enum PaymentStatus {
  FAIL = "FAIL",
  SUCCESS = "SUCCESS", 
  PENDING = "PENDING"
}

// Interface cho request body khi update payment history
export interface UpdatePaymentHistoryRequest {
  user_id: number;
  transaction_id: string;
  date: string; // Format: "2024-12-13T03:51:34.682Z"
  type: PaymentType;
  method: string;
  status: PaymentStatus;
  content: string;
  total_pay: number;
  balance: number;
  data: string;
  note: string;
  is_active: boolean;
  updated_by: number;
}

// Interface cho params khi gọi API update
export interface UpdatePaymentHistoryParams {
  id: number; // ID của lịch sử thanh toán cần cập nhật
}

// Interface cho response khi update payment history thành công
export interface UpdatePaymentHistoryResponse {
  message: string; // "Cập nhật lịch sử thanh toán thành công"
  data: PaymentHistory;
}

// Interface cho response khi update payment history thất bại
export interface UpdatePaymentHistoryError {
  message: string;
  error: {
    code: string;
    message: string;
  }[];
}

// Interface cho payment method
export interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  access_key: string;
  secret_key: string;
  status: number;
  created_at: string; // "2024-12-13T04:22:27.531Z"
  updated_at: string; // "2024-12-13T04:22:27.531Z"
}

// Interface cho response khi lấy danh sách payment methods
export interface PaymentMethodResponse {
  message: string; // "Danh sách phương thức thanh toán thành công"
  data: PaymentMethod[];
}

// Interface cho request body khi tạo payment method mới
export interface CreatePaymentMethodRequest {
  name: string;
  description: string;
  access_key: string;
  secret_key: string;
  status: number;
}

// Interface cho response khi tạo payment method
export interface CreatePaymentMethodResponse {
  message: string; // "Tạo mới phương thức thanh toán thành công"
  data: PaymentMethod;
}

// Interface cho params khi get/update/delete payment method by ID
export interface PaymentMethodParams {
  id: string;
}

// Interface cho request body khi update payment method
export interface UpdatePaymentMethodRequest {
  name?: string;
  description?: string;
  access_key?: string;
  secret_key?: string;
  status?: number;
}

// Interface cho response khi update payment method
export interface UpdatePaymentMethodResponse {
  message: string; // "Sửa phương thức thanh toán thành công"
  data: PaymentMethod;
}

// Interface cho response khi delete payment method
export interface DeletePaymentMethodResponse {
  message: string; // "Xóa phương thức thanh toán thành công"
  data: null;
}

// Interface cho error responses
export interface PaymentMethodError {
  message: string;
  error: {
    code: string;
    message: string;
  }[];
}