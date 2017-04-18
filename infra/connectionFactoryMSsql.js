const mssql = require('mssql')

function connectionFactoryMSsql(host, port, user, password, database) {
  database = process.env.NODE_ENV

  console.log(database);

  let connection = mssql.createConnection({
    host : host || '10.2.144.35',
    user : user || 'WCH_PCK',
    password : password || 'teste',
    database : database || 'WCH_PCK'
  });

  //  let connection = mssql.createConnection({
  //   host :  '10.2.144.35',
  //   user :  'WCH_PCK',
  //   password :  '*5dPu(v',
  //   database :  'MSPNP'
  // });

  return connection
}

module.exports = connectionFactoryMSsql;
