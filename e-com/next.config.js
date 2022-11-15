/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URL:
      'mongodb+srv://desaianiruddh:anii123@cluster0.b8zam.mongodb.net/ecom-nextjs?retryWrites=true&w=majority',
  },
};

module.exports = nextConfig;
