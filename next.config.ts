import type { NextConfig } from "next";
//allow domain for show pic
const nextConfig: NextConfig = {
  images: {
    remotePatterns:[
      {protocol:"https", hostname: "api.codingthailand.com"},
    ]
  }
};

export default nextConfig;
