
export default class ApiExecuteResult {

  constructor(result) {
    this._result = JSON.parse(result);
  }

  get rows() {
    return this._result.rows;
  }
}