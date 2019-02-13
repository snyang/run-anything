
import RestClient from '../../core/RestClient';
import { ApiExecuteConstants } from './SqlConstants';
import ExecuteResult from './model/ExecuteResult';

export default class SqlRestClient {
  private _hostUrl: string;
  constructor(hostUrl) {
    this._hostUrl = hostUrl;
  }

  async execute(body) {
    let result = await RestClient.post(`${this._hostUrl}${ApiExecuteConstants.path}`, body);
    return new ExecuteResult(result);
  }
}