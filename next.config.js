/** @type {import('next').NextConfig} */

const withImages = require("next-images");

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["randomuser.me"],
    },
};

module.exports = withImages(nextConfig);
