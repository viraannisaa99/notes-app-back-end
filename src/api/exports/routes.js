const routes = (handler) => [
  {
    method: 'POST',
    path: '/export/notes', // path ditulis lengkap untuk memperjelas data apa yang dieskpor
    handler: handler.postExportNotesHandler,
    options: {
      auth: 'notesapp_jwt', // membutuhkan identitas pengguna untuk mengeskpor catatan
    },
  },
];

module.exports = routes;
