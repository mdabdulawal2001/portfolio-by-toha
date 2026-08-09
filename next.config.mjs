/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // যেকোনো ডোমেইন এলাউ করবে
      },
      {
        protocol: "http",
        hostname: "**", // HTTP সোর্স এলাউ করার জন্য
      },
    ],
  },
};

export default nextConfig;
