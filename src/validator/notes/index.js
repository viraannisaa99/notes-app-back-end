const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadSchema } = require('./schema');

const NotesValidator = {
  // untuk melakukan validasi dan mengevaluasi apakah validasi itu berhasil / tidak
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadSchema.validate(payload); // validasi payload dengan schema yang telah dibuat
    // jika error bukan undefined, tampilan pesan error
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = NotesValidator;
