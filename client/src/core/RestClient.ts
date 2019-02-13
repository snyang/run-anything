import * as request from 'request';

export default class RestClient {

  static async get(path: string) {

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
          RestClient._onError(error, reject);
        })
    });
  }

  static async put(path: string, body: object) {

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
          RestClient._onResponse(error, response, responseBody, resolve, reject);
        })
        .on('error', function (error) {
          RestClient._onError(error, reject);
        })
    });
  }

  static async post(path: string, body: object) {

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
          RestClient._onResponse(error, response, responseBody, resolve, reject);
        })
        .on('error', function (error) {
          RestClient._onError(error, reject);
        })
    });
  }

  static async delete(path: string) {

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
          RestClient._onResponse(error, response, responseBody, resolve, reject);
        })
        .on('error', function (error) {
          RestClient._onError(error, reject);
        })
    });
  }

  static _onResponse(error: any,
    response: request.Response,
    responseBody: string,
    resolve: (result: any) => any,
    reject: (error: any) => any) {
    
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

  static _onError(error: any, reject: (error: any) => any) {
    reject(error);
  }

}