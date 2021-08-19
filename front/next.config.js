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
    api: 'http://localhost:1337',
  },
  images: {
    domains: ['localhost'],
  }
}
