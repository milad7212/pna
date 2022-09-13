/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,

    images: {
        domains: ["event.bsjmajazi.ir"],
    },
};

module.exports = nextConfig;