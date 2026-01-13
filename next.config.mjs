/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/llyna' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/llyna' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
