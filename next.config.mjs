/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http', // Sử dụng http thay vì https
  //       hostname: 'localhost', // Tên máy chủ
  //       port: '3002', // Cổng mà máy chủ đang chạy
  //       pathname: '/images/**', // Đường dẫn tới hình ảnh
  //     },
  //   ],
  // },
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // Thêm tên miền cần thiết
      },
      {
        protocol: 'https',
        hostname: 'api-core.dsp.one', // Nếu bạn đang sử dụng domain này
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
