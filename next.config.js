module.exports = {
  images: {
    domains: ['via.placeholder.com', 'user-service', 'api-core.dsp.one'], // Thêm nguồn ảnh vào đây
  },

  async rewrites() {
    return [
      {
        source: '/api/login', // URL nội bộ bạn gọi
        destination: 'https://api-core.dsp.one/login', // URL API bên ngoài
      },
      {
        source: '/api/register',
        destination: 'https://api-core.dsp.one/api/auth/user/register',
      },
      {
        source: '/api/user-profile',
        destination: 'https://api-core.dsp.one/api/auth/user/user-profile/',
      },
    ];
  },
};
