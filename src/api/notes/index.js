const NotesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'notes',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    // setiap instance dipanggil, maka akan membawa plugin service dan validator sebagai argumen
    const notesHandler = new NotesHandler(service, validator); // instance dari class NotesHandler
    server.route(routes(notesHandler)); // mendaftarkan routes
  },
};

/**
 * plugin memudahkan kita untuk memisah-misahkan komponen aplikasi yang dibuat
 */
