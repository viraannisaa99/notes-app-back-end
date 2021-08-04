const NotesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'notes',
  version: '1.0.0',
  register: async (server, { service }) => {
    // server dan objek options yang menampung server
    const notesHandler = new NotesHandler(service); // instance dari class NotesHandler
    server.route(routes(notesHandler)); // mendaftarkan routes
  },
};

/**
 * plugin memudahkan kita untuk memisah-misahkan komponen aplikasi yang dibuat
 */
