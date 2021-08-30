// Develop
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'talanov.beget.tech'),
        database: env('DATABASE_NAME', 'talanov_mel_dev'),
        username: env('DATABASE_USERNAME', 'talanov_mel_dev'),
        password: env('DATABASE_PASSWORD', 'on&EZzL6'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

// Production
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'mysql',
//         host: env('DATABASE_HOST', 'localhost'),
//         database: env('DATABASE_NAME', 'talanov_melishev'),
//         username: env('DATABASE_USERNAME', 'talanov_melishev'),
//         password: env('DATABASE_PASSWORD', '4q%IGfKT'),
//         ssl: env.bool('DATABASE_SSL', false),
//       },
//       options: {}
//     },
//   },
// });
