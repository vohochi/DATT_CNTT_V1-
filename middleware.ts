import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const origin = request.headers.get('origin') || '*';

  // Tạo phản hồi ban đầu
  const response = NextResponse.next();

  // Thêm các header CORS
  response.headers.set('Access-Control-Allow-Origin', origin); // Chỉ định nguồn gốc
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, x-requested-with'
  );

  // Xử lý yêu cầu OPTIONS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: response.headers,
      status: 204,
    });
  }

  return response;
}
