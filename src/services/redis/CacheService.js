const redis = require('redis');

class CacheService {
  constructor() {
    this._client = redis.createClient({
      host: process.env.REDIS_SERVER,
    }); // untuk mengoperasikan redis server

    this._client.on('error', (error) => {
      console.error(error);
    }); // error jika redis gagal dibuat
  }

  // untuk menyimpan nilai dalam cacahe
  set(key, value, expirationInSecond = 3600) {
    return new Promise((resolve, reject) => {
      // cara menyimpan nilai menggunakan redis client
      this._client.set(key, value, 'EX', expirationInSecond, (error, ok) => {
        if (error) {
          return reject(error);
        }
        return resolve(ok);
      });
    });
  }

  // untuk mendapatkan nilai pada key di redis
  get(key) {
    return new Promise((resolve, reject) => {
      // data akan dibawa oleh parameter reply
      this._client.get(key, (error, reply) => {
        if (error) {
          return reject(error);
        }
        if (reply === null) {
          return reject(new Error('Cache tidak ditemukan'));
        }
        return resolve(reply.toString()); // jika reply tidak null, maka dapatkan nilai dengan bantuan toString()
      });
    });
  }

  // menghapus nilai pada key di redis
  delete(key) {
    return new Promise((resolve, reject) => {
      this._client.del(key, (error, count) => {
        if (error) {
          return reject(error);
        }
        return resolve(count);
      });
    });
  }
}

module.exports = CacheService;
