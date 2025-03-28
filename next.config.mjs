import createNextIntlPlugin from "next-intl/plugin";

// เปิดใช้ Next-Intl
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// รวม Plugins ทั้งสองตัว
export default withNextIntl(nextConfig);
