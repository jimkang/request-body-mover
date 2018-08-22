function RequestBodyMover({ url, responseIsOK }, done) {
  if (!responseIsOK) {
    responseIsOK = defaultResponseIsOK;
  }
  return receiver;

  function receiver(error, res, body) {
    if (error) {
      done(error);
    } else if (!responseIsOK(res)) {
      let message = '';
      if (responseIsOK === defaultResponseIsOK) {
        message = `Received status code ${res.statusCode}`;
      } else {
        message = 'Bad response';
      }
      if (url) {
        message += ` from ${url} `;
      }
      message += '.';
      done(new Error(message));
    } else {
      done(null, body);
    }
  }
}

function defaultResponseIsOK(res) {
  return res.statusCode > 199 && res.statusCode < 300;
}

module.exports = RequestBodyMover;
