const Joi = require('joi');

// menentukan validitas nilai properti berdasarkan nilai secara spesifik
const ImageHeadersSchema = Joi.object({
  'content-type': Joi.string().valid(
    'image/apng', 
    'image/avif', 
    'image/gif', 
    'image/jpeg', 
    'image/png', 
    'image/webp'
  ).required(),
}).unknown(); // membuat objek bersifat tidak diketahui, sehingga objek boleh memiliki properti apa saja

module.exports = { ImageHeadersSchema };
