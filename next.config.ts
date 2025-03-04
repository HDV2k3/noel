import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [], // Thêm domain nếu hình ảnh từ bên ngoài
    unoptimized: true, // Có thể thử bật tùy chọn này nếu hình ảnh vẫn không hiển thị
  },
  // Thêm basePath nếu ứng dụng được deploy trong một đường dẫn con
  // basePath: '/noel',
};
export default nextConfig;
