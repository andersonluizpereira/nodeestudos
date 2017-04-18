const connectionFactoryMSsql = require('../infra/connectionFactoryMSsql')
const PedidoDao = require('../dao/PedidoDao')

class OrdersController {
  constructor() {
    console.log('ORDER');
  }

  listaTodos(req, res) {
    let connection = connectionFactoryMSsql()
    let PedidoDao = new PedidoDao(connection)
    let salvo = req.query.salvo

    PedidoDao.listaTodos(function(err, result, fields) {
      res.format({
        html : () => {
          res.render('pedidos/lista', {pedidos : result, salvo: salvo})
        },
        json : () => {
          res.json(result)
        }
      })
    })

    connection.end()
  }

  }

module.exports = new OrdersController()
