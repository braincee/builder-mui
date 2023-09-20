/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    // https://www.npmjs.com/package/@builder.io/sdk-react
    transpilePackages: ['@builder.io/sdk-react'],
    images: {
        domains: ['cdn.builder.io'],
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    // this will allow site to be framed under builder.io for wysiwyg editing
                    {
                        key: 'Content-Security-Policy',
                        value: 'frame-ancestors https://*.builder.io https://builder.io http://localhost:3000',
                    },
                ],
            },
        ]
    },
}
