const connectionFactory = require('../infra/connectionFactory')
const ProdutoDao = require('../dao/ProdutoDao')

class ProdutoController {
  constructor() {
    console.log('AE');
  }


detalhe(req, res) {
    let connection = connectionFactory()
    let produtoDao = new ProdutoDao(connection)
    let salvo = req.query.salvo
    let id =  req.params.id
    console.log(req.params.id)

    produtoDao.detalhe(id,function(err,result, fields) {
      
      var livro = {livros : result}
      console.log(livro)
      
      res.format({
        html : () => {
          res.render('produtos/detalhe', livro)
        },
        json : () => {
          res.json(result)
        }
      })
    })

    connection.end()
  }

  listaTodos(req, res) {
    console.log('AE');
    let connection = connectionFactory()
    let produtoDao = new ProdutoDao(connection)
    let salvo = req.query.salvo

    produtoDao.listaTodos(function(err, result, fields) {
      res.format({
        html : () => {
          res.render('produtos/lista', {livros : result, salvo: salvo})
        },
        json : () => {
          res.json(result)
        }
      })
    })

    connection.end()
  }

  salva(req, res) {
    let connection = connectionFactory()
    let produtoDao = new ProdutoDao(connection)
    let livro = req.body
    let err = false

    req.assert('titulo', 'Título deve ser preenchido').notEmpty()
    err = req.validationErrors()

    if (err) {
      res.render('produtos/form', {validationErrors : err})
    }

    produtoDao.salvar(livro, function(err, result, fields) {
      res.redirect('/produtos?salvo=true')
    })
  }

altera(req, res) {
    var _id = req.params._id;
    let connection = connectionFactory()
    let produtoDao = new ProdutoDao(connection)
    let livro = req.body
    let err = false

    req.assert('titulo', 'Título deve ser preenchido').notEmpty()
    err = req.validationErrors()

    if (err) {
      res.render('produtos/form', {validationErrors : err})
    }

    produtoDao.altera(livro, function(err, result, fields) {
      res.redirect('/produtos?salvo=true')
    })
  }


  form(req, res) {
    res.render('produtos/form')
  }
}

module.exports = new ProdutoController()
