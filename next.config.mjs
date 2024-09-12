/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'codante.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
