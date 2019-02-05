
import BaseRestClient from './BaseRestClient';

export default class SqlRestClient extends BaseRestClient {

  constructor() {
    super('/api/sql');
  }

  execute(body) {
    return this.post('/action/execute', body);
  }
}