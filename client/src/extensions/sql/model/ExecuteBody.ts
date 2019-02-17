export default class ExecuteBody {

  private context: object;
  private statement: string;
  constructor(context: object, statement: string) {
    this.context = context;
    this.statement = statement;
  }

  getContext() {
    return this.context;
  }
  
  getStatement() {
    return this.statement;
  }

  getJson() {
    return JSON.stringify(this);
  }
}