const fs = require('fs');

class StorageService {
  constructor(folder) {
    this._folder = folder; // path folder penyimpanan

    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }
  }

  writeFile(file, meta) {
    const filename = +new Date() + meta.filename; // menampung nilai dari nama berkas = timestamp
    const path = `${this._folder}/${filename}`; // menampung path lengkap dari berkas

    const fileStream = fs.createWriteStream(path);

    // penulisan berkas berjalan secara async menggunakan teknik stream
    return new Promise((resolve, reject) => {
      fileStream.on('error', (error) => reject(error)); // jika error tampilkan pesan error
      file.pipe(fileStream);
      file.on('end', () => resolve(filename)); // jika berhasil, kembalikan nama berkas
    });
  }
}

module.exports = StorageService;
