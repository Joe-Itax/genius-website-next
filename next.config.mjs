/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/google800cd35aa99fb60b.html",
        destination: "/api/google800cd35aa99fb60b",
      },
    ];
  },
};

export default nextConfig;
