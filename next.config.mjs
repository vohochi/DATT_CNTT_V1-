/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Bỏ qua lỗi TypeScript khi build
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['via.placeholder.com', 'fakestoreapi.com', 'api-core.dsp.one'],
  },
  async rewrites() {
    return [
      {
        source: '/api/register', // Đảm bảo rằng đường dẫn này khớp với API
        destination: 'https://api-core.dsp.one/api/auth/user/register',
      },
      {
        source: '/api/login', // Đảm bảo rằng đường dẫn này khớp với API
        destination: 'https://api-core.dsp.one/login',
      },
      {
        source: '/api/user-profile/:id', // Đảm bảo rằng đường dẫn này khớp với API
        destination: 'https://api-core.dsp.one/api/auth/user/user-profile/:id',
      },
      {
        source: '/api/:path*', // Endpoint proxy trên frontend
        destination: 'https://api-core.dsp.one/api/:path*', // URL API thực tế
      },
      // {
      //   source: '/api/category', // Đảm bảo rằng đường dẫn này khớp với API
      //   destination: 'https://api-core.dsp.one/api/auth/user/register',
      // },
    ];
  },
};

export default nextConfig;
