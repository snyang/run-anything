export default class ExecuteResult {
  private _result: {rows: any};

  constructor(result) {
    this._result = JSON.parse(result);
  }

  get rows() {
    return this._result.rows;
  }
}