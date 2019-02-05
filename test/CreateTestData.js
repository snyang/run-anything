const sqlite3 = require('sqlite3').verbose();

CreateTestData();

function CreateTestData() {
  let errorCallBack = function (err) {
    if (err) {
      console.error(`error: ${err}`);
    }
  };
  try {
    let db = connect(errorCallBack);
    console.log('connected.')

    db.serialize(() => {
      createTables(db, errorCallBack);
      console.log('table created.');

      createData(db, errorCallBack);
      console.log('Data created.');

      validatData(db, errorCallBack);

    });

    close(db, errorCallBack);
    console.log('closed.')
  }
  catch (error) {
    console.error(`error: ${error}`);
  }
}

function connect(errorCallBack) {
  let db = new sqlite3.Database('./data/sqlite.db',
    sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE,
    errorCallBack);
  return db;
}

function close(db, errorCallBack) {
  // db.close(errorCallBack);
}

function createTables(db, errorCallBack) {
  let sql = `CREATE TABLE contacts (
  contact_id INTEGER PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email text NOT NULL UNIQUE,
  phone text NOT NULL UNIQUE
 );`
  db.run(sql, errorCallBack);
}

function createData(db, errorCallBack) {
  for (let index = 0; index < 100; index++) {
    let sql = `
INSERT INTO contacts (
        contact_id
      , first_name
      , last_name
      , email
      , phone
) VALUES (
        ${index}
      , 'first name${index}'
      , 'last name${index}' 
      , 'email${index}@www.com'
      , '123456${index}'
);`
    db.run(sql, errorCallBack);
  }
}

function validatData(db, errorCallBack) {
  let sql = `SELECT count(*) as count FROM contacts;`
  db.get(sql, (err, row) => {
    if (err) {
      return errorCallBack(err);
    }
    return row
      ? console.log(`total count: ${row.count}`)
      : console.log(`no data.`);

  });

}