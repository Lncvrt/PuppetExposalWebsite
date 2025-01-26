/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "puppet-cdn.lncvrt.xyz",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "puppet-large-cdn.lncvrt.xyz",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
