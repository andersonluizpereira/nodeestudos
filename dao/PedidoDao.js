function PedidoDao(connection) {
  this._connection = connection
}

PedidoDao.prototype.listaTodos = function(callback) {
  this._connection.query("select  **************", callback)
}


module.exports = PedidoDao
