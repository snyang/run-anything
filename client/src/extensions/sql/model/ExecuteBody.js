export default class ExecuteBody {

  constructor(sql) {
    this.sql = sql;
  }

  getJson() {
    return JSON.stringify(this);
  }
}