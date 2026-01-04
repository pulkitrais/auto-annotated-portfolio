/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true
    },
    basePath: process.env.GITHUB_ACTIONS ? '/auto-annotated-portfolio' : ''
};

module.exports = nextConfig;
