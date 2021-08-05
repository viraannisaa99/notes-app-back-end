require('dotenv').config();

const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NotesService = require('./services/postgres/NotesService');
const NotesValidator = require('./validator/notes');

const init = async () => {
  const notesService = new NotesService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // daftarkan plugin notes disini
  await server.register({
    plugin: notes,
    options: {
      service: notesService, // mendaftarkan plugin service
      validator: NotesValidator, // mendaftarkan plugin validator
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

/**
 * perbedaannya dengan yang lama, routes tidak lagi didefinisikan disini, tetapi di index.js
 */
