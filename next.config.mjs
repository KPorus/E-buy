/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, './src')],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**www.rokomari.com**",
      }
    ],
  },
};


export default nextConfig;
