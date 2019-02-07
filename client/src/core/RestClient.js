const request = require('request');

export default class RestClient {

  static async post(path, body) {

    return new Promise((resolve, reject) => {
      request.post(
        {
          url: path,
          body: body === undefined ? undefined : JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        },
        (error, response, responseBody) => {
          // when error, always reject objects
          if (error) {
            reject(error);
            return;
          }
          if (response !== undefined && response.statusCode === 200) {
            resolve(responseBody);
            return;
          }

          reject(response === undefined ? undefined : response.toJSON());
        })
        .on('error', function (error) {
          reject(error);
        })
    });
  }

}