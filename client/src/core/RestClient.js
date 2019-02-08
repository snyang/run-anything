const request = require('request');

export default class RestClient {

  static async get(path) {

    return new Promise((resolve, reject) => {
      request.get(
        {
          url: path,
          body: undefined,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        },
        (error, response, responseBody) => {
          if (error) {
            reject({ message: error.message });
            return;
          }
          if (response !== undefined && response.statusCode >= 200 && response.statusCode < 400) {
            resolve(responseBody);
            return;
          }

          reject(response === undefined ? undefined : response.toJSON());
        })
        .on('error', function (error) {
          this._onError(error, reject);
        })
    });
  }

  static async put(path, body) {

    return new Promise((resolve, reject) => {
      request.put(
        {
          url: path,
          body: body === undefined ? undefined : JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        },
        (error, response, responseBody) => {
          this._onResponse(error, response, responseBody, resolve, reject);
        })
        .on('error', function (error) {
          this._onError(error, reject);
        })
    });
  }

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
          this._onResponse(error, response, responseBody, resolve, reject);
        })
        .on('error', function (error) {
          this._onError(error, reject);
        })
    });
  }

  static async delete(path) {

    return new Promise((resolve, reject) => {
      request.delete(
        {
          url: path,
          body: undefined,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        },
        (error, response, responseBody) => {
          this._onResponse(error, response, responseBody, resolve, reject);
        })
        .on('error', function (error) {
          this._onError(error, reject);
        })
    });
  }

  static async delete2(path) {

    return this._request((resolve, reject) => {
      request.delete(
        {
          url: path,
          body: undefined,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        },
        (error, response, responseBody) => {
          this._onResponse(error, response, responseBody, resolve, reject);
        });
    });
  }

  static _request(requestFunction) {
    return new Promise((resolve, reject) => {
      requestFunction(resolve, reject)
        .on('error', function (error) {
          this._onError(error, reject);
        })
    });
  }

  static _onResponse(error, response, responseBody, resolve, reject) {
    // when error, always reject objects
    if (error) {
      reject({ message: error.message });
      return;
    }
    if (response !== undefined && response.statusCode >= 200 && response.statusCode < 400) {
      resolve(responseBody);
      return;
    }

    reject(response === undefined ? undefined : response.toJSON());
  }

  static _onError(error, reject) {
    reject(error);
  }

}