function PedidoDao(connection) {
  this._connection = connection
}

PedidoDao.prototype.listaTodos = function(callback) {
  this._connection.query("select  situacao_logistica, numero_pedido_rls = count(numero_pedido_rls),cast( replace(sum(VL_TOTAL_CAPTADO_PEDIDO),',','.') as decimal(18,2)) as VL_TOTAL_CAPTADO_PEDIDO, cast( replace(sum(VL_TOTAL_FATURADO_PEDIDO),',','.')as decimal(18,2)) as VL_TOTAL_FATURADO_PEDIDO from tbPedidos_CAPTADOS group by situacao_logistica order by situacao_logistica", callback)
}


module.exports = PedidoDao
