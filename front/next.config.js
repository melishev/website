module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  reactStrictMode: true,
  env: {
    domain: 'melishev.ru',
    api: 'https://api.melishev.ru',
  },
  images: {
    domains: ['api.melishev.ru', 'localhost'],
  }
}
