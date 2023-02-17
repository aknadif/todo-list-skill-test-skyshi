/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BASE_API_URL: process.env.NEXT_PUBLIC_BASE_API_URL,
        ACTIVITY_URL: process.env.NEXT_PUBLIC_ACTIVITY_URL,
        TODO_URL: process.env.NEXT_PUBLIC_TODO_URL,
        EMAIL: process.env.NEXT_PUBLIC_EMAIL,
    }
};

module.exports = nextConfig;
