/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://45.84.227.13/api/:path*' // Proxy to Backend
            }
        ]
    }
};

export default nextConfig;
