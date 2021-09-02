/**
 * untuk menyesuaikan kemballi struktur database dengan cara mapping objek.
 */

const mapDBToModel = ({ id, title, body, tags, created_at, updated_at, username }) => ({
  id,
  title,
  body,
  tags,
  createdAt: created_at, // perbaiki properti agar strukturnya sama dan tidak gagal di pengujian
  updatedAt: updated_at,
  username,
});

module.exports = { mapDBToModel };
