import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // other Next.js configurations...
}

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  // additional PWA configurations...
})(nextConfig);
