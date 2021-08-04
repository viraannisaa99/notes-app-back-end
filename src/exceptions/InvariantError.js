const ClientError = require('./ClientError');

class InvariantError extends ClientError {
  constructor(message) {
    super(message); // inheritance status 400 dari ClientError
    this.name = 'InvariantError';
  }
}

module.exports = InvariantError;
