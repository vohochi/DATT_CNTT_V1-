// src/app/middleware.js
import { NextResponse } from 'next/server';

export function middleware() {
  const response = NextResponse.next();

  // Cấu hình CORS cho tất cả các yêu cầu
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE'
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );

  return response;
}
