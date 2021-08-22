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
    api: 'http://api.melishev.ru',
  },
  images: {
    domains: ['https://api.melishev.ru', 'localhost'],
  }
}
