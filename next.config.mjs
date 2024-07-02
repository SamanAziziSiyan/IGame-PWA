import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Ensure appDir is enabled
  },
};

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  ...nextConfig,
});
