/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                // destination: 'http://45.84.227.13/api/:path*' // Proxy to Backend
                destination: 'http://localhost:3020/api/:path*' // Proxy to Backend
            },
            {
                source: '/static/:path*',
                // destination: 'http://45.84.227.13/static/:path*' // Proxy to Backend
                destination: 'http://localhost:3020/static/:path*' // Proxy to Backend
            }
        ]
    }
};

export default nextConfig;
