import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
  }
}

export default nextConfig;
