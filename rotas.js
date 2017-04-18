const IndexController = require('./controller/IndexController')
const ProdutoController =  require('./controller/ProdutoController')
const PromocoesController = require('./controller/PromocoesController')


module.exports = function (app) {
  app.get('/', IndexController.index)
  app.get('/produtos/detalhe/:id', ProdutoController.detalhe)
  app.get('/produtos/editar/:id', ProdutoController.edita)
  app.get('/produtos', ProdutoController.listaTodos)
  app.post('/produtos', ProdutoController.salva)
  // app.put('/produtos/:id', ProdutoController.alterar)
  app.put('/produtos', ProdutoController.alterar)
  app.get('/produtos/form', ProdutoController.form)
  app.get('/promocoes/form', PromocoesController.form)
  app.post('/promocoes', PromocoesController.salvaEDispara.bind(this, app))
  // app.put('/livros',  LivrosController.update.bind(LivrosController));
  // app.post('/livros',  LivrosController.create.bind(LivrosController));
  // app.delete('/livros',  LivrosController.delete.bind(LivrosController));
  // app.get ('/livros', LivrosController.findAll.bind(LivrosController));
  // app.get ('/livros/:_id', LivrosController.findOne.bind(LivrosController));

}