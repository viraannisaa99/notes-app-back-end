const ClientError = require('./ClientError');

class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 404); // inheritance status 400 dari ClientError
    this.name = 'NotFoundError';
  }
}

module.exports = NotFoundError;
