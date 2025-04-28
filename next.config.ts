import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'picsum.photos',
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // },
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  basePath: '/github.io',
  assetPrefix: '/github.io/',
  
};

// module.exports = nextConfig;
export default nextConfig;
