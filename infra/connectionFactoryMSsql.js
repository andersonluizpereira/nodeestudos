const mssql = require('mssql')

function connectionFactoryMSsql(host, port, user, password, database) {
  database = process.env.NODE_ENV

  console.log(database);

  let connection = mssql.createConnection({
    host : host || 'xxxxxxxx',
    user : user || 'xxxxxxxxx',
    password : password || 'teste',
    database : database || 'teste'
  });

  return connection
}

module.exports = connectionFactoryMSsql;
