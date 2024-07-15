/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    tsconfigPath: "tsconfig.build.json",
  },
};

export default nextConfig;
