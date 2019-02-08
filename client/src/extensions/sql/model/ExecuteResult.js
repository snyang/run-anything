export default class ExecuteResult {

  constructor(result) {
    this._result = JSON.parse(result);
  }

  get rows() {
    return this._result.rows;
  }
}