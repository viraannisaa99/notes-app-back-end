const routes = (handler) => [
  // handler dimasukkan dalam paramerter fungsi
  {
    method: 'POST',
    path: '/notes',
    handler: handler.postNoteHandler, // kombinasi method + path + Handler
  },
  {
    method: 'GET',
    path: '/notes',
    handler: handler.getNotesHandler, // plural
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: handler.getNoteByIdHandler, // singular
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: handler.putNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handler.deleteNoteByIdHandler,
  },
];

module.exports = routes;
