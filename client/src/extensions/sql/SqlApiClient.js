
import RestClient from '../../core/RestClient';
import { ApiExecuteConstants } from './SqlConstants';
import ExecuteResult from './model/ExecuteResult';

export default class SqlRestClient {
  constructor(hostUrl) {
    this.hostUrl = hostUrl;
  }

  async execute(body) {
    let result = await RestClient.post(`${this.hostUrl}${ApiExecuteConstants.path}`, body);
    return new ExecuteResult(result);
  }
}