function LivroDao(connection) {
  this._connection = connection
}

LivroDao.prototype.create = function(data, callback) {
  this._connection.query('INSERT INTO livros SET ?', livro, callback)
}

LivroDao.prototype.listaTodos = function(callback) {
  this._connection.query('SELECT * FROM livros', callback)
}

LivroDao.prototype.salvar = function(livro, callback) {
  this._connection.query('INSERT INTO livros SET ?', livro, callback)
}

LivroDao.prototype.alterar = function(livro,_id,callback) {
  this._connection.query('update livros SET ? where id = '+_id, livro, callback)
  
}


module.exports = LivroDao