const Jwt = require('@hapi/jwt');
const InvariantError = require('../exceptions/InvariantError');

const TokenManager = {
  // payload berisi identitas user (ex. user id)
  // secretKey berisi kunci enskripsi untuk membuat jwt token
  generateAccessToken: (payload) => Jwt.token.generate(payload, process.env.ACCESS_TOKEN_KEY),
  generateRefreshToken: (payload) => Jwt.token.generate(payload, process.env.REFRESH_TOKEN_KEY),

  verifyRefreshToken: (refreshToken) => {
    try {
      const artifacts = Jwt.token.decode(refreshToken); // decode token
      // verifikasi token yang sudah di decoded (artifacts)
      Jwt.token.verifySignature(artifacts, process.env.REFRESH_TOKEN_KEY); // refresh token memiliki signature yang sesuai atau tidak
      const { payload } = artifacts.decoded; // nanti akan digunakan untuk membuat akses token baru
      return payload;
    } catch (error) {
      throw new InvariantError('Refresh token tidak valid');
    }
  },
};

module.exports = TokenManager;
