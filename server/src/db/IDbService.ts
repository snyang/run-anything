export class IDbService {

  connect() {
    throw new Error('failed to connect.')
  }

  query(sql: string) { }

  run(sql: string) { }
}