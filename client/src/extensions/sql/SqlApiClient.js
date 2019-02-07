
import RestClient from '../../core/RestClient';
import { ApiExecuteConstants } from './SqlConstants';
import ApiExecuteResult from './ApiExecuteResult';

export default class SqlRestClient {
  constructor(hostUrl) {
    this.hostUrl = hostUrl;
  }

  // TODO: 
  // - return with a strong-typed class
  async execute(body) {
    let result = await RestClient.post(`${this.hostUrl}${ApiExecuteConstants.path}`, body);
    return new ApiExecuteResult(result);
  }
}