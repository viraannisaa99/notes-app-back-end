const routes = (handler) => [
  // handler dimasukkan dalam paramerter fungsi
  {
    method: 'POST',
    path: '/notes',
    handler: handler.postNoteHandler, // kombinasi method + path + Handler
    options: {
      auth: 'notesapp_jwt',
    },
  },
  {
    method: 'GET',
    path: '/notes',
    handler: handler.getNotesHandler, // plural
    options: {
      auth: 'notesapp_jwt',
    },
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: handler.getNoteByIdHandler, // singular
    options: {
      auth: 'notesapp_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: handler.putNoteByIdHandler,
    options: {
      auth: 'notesapp_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handler.deleteNoteByIdHandler,
    options: {
      auth: 'notesapp_jwt',
    },
  },
];

module.exports = routes;
