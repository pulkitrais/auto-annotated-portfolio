/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    output: 'export',
    trailingSlash: true,
    reactStrictMode: true
};

module.exports = nextConfig;
