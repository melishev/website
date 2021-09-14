const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: true,
  env: {
    domain: 'melishev.ru',
    api: 'http://localhost:1337', // 'https://api.melishev.ru',
  },
  images: {
    domains: ['api.melishev.ru', 'localhost'],
  },
});
