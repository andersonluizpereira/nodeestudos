const mysql = require('mysql')
const config = require('config')

function connectionFactory(host, port, user, password, database) {
  database = process.env.NODE_ENV

  console.log(database);

  // let connection = mysql.createConnection({
  //   host : host || config.get('mysql.host'),
  //   port : port || config.get('mysql.port'),
  //   user : user || config.get('mysql.user'),
  //   password : password || config.get('mysql.password'),
  //   database : database || config.get('mysql.database')
  // });

    let connection = mysql.createConnection({
    host :  config.get('mysql.host'),
    port :  config.get('mysql.port'),
    user :  config.get('mysql.user'),
    password :  config.get('mysql.password'),
    database : config.get('mysql.database')
  });

  return connection
}

module.exports = connectionFactory;
