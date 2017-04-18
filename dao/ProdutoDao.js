function ProdutoDao(connection) {
  this._connection = connection
}


ProdutoDao.prototype.detalhe = function(id,callback) {
  console.log('det :' +id);
  this._connection.query('SELECT * FROM livros where id = '+id, callback)
}

ProdutoDao.prototype.listaTodos = function(callback) {
  this._connection.query('SELECT * FROM livros', callback)
}

ProdutoDao.prototype.salvar = function(livro, callback) {
  this._connection.query('INSERT INTO livros SET ?', livro, callback)
  
}

ProdutoDao.prototype.alterar = function(livro,_id,callback) {
  this._connection.query('update livros SET ? where id = '+_id, livro, callback)
  
}


module.exports = ProdutoDao
