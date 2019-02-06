
var request = require('request');

export default class RestClient {

  constructor(baseUrl) {
    this.baseUrl = 'http://localhost:9000' + baseUrl;
  }

  async post(path, body) {

    return new Promise((resolve, reject) => {
      request.post(
        {
          url: this.baseUrl + path,
          body: body,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        },
        (error, response, responseBody) => {
          if (error) {
            reject(responseBody);
            return;
          }
          if (response !== undefined && response.statusCode === 200) {
            resolve(responseBody);
            return;
          }
          reject(responseBody);
        })
        .on('error', function (error) {
          reject(error);
        })
    });
  }
  
}