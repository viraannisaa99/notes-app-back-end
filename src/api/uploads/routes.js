const path = require('path');

const routes = (handler) => [
  {
    method: 'POST',
    path: '/upload/images',
    handler: handler.postUploadImageHandler,
    options: {
      payload: {
        allow: 'multipart/form-data', // konfigurasi multipart
        multipart: true,
        output: 'stream',
      },
    },
  },
  {
    method: 'GET', // jika ada permintaan masuk ke GET, maka akan dilayani oleh berkas statis yang ada di folder file sesuai dengan parameter yang diminta
    path: '/upload/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, 'file'),
      },
    },
  },
];

module.exports = routes;
