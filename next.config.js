/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  images: {
    domains: [
      'github-contributions-api.deno.dev',
      's3.us-west-2.amazonaws.com',
    ],
  },
};

module.exports = withMDX(nextConfig);
