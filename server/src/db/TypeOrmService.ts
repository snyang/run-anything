import { IDbService } from './IDbService';
import * as orm from 'typeorm';

export class TypeOrmService extends IDbService {

  constructor(connectionOptions: any) {
    super();
    this._connectionOptions = connectionOptions;
  }

  private _connectionOptions: any;
  private static _connection: orm.Connection = undefined;
  public get connectionOptions(): any {
    return this._connectionOptions;
  }

  async connect(): Promise<orm.Connection> {
    if (!TypeOrmService._connection) {
      TypeOrmService._connection = await orm.createConnection(this._connectionOptions);
    }
    return TypeOrmService._connection;
  }

  async query(sql: string): Promise<any> {
    let conn = await this.connect();
    let rawData = await conn.manager.query(sql);
    return rawData;
  }
}