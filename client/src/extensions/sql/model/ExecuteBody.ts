export default class ExecuteBody {

  private sql: string;
  constructor(sql) {
    this.sql = sql;
  }

  getSql() {
    return this.sql;
  }
  
  getJson() {
    return JSON.stringify(this);
  }
}