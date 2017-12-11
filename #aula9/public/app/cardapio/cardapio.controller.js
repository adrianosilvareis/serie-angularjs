angular.module('app.cardapio')
  .controller('CardapioController', CardapioController)

function CardapioController($scope, $filter) {
  
        $scope.conta = [];
        $scope.total = 0;
    
        $scope.titulos = {
          nomeEstabelecimento: "ReStauraNte do Adriano",
          menu: 'Cardápio Especial',
          conta: 'Pedidos'
        };
    
        $scope.cardapio = [
          { _id: 1, nome: 'Comida 1', descricao: 'comida 1 bla bla sjsj', preco: 15.00 },
          { _id: 2, nome: 'Comida 2', descricao: 'comida 2 bla comida japonesa', preco: 27.00 },
          { _id: 3, nome: 'Comida 3', descricao: 'comida 3 carlos', preco: 13.00 },
          { _id: 4, nome: 'Comida 4', descricao: 'comida 4 bla bla jose', preco: 12.99 },
          { _id: 5, nome: 'Comida 5', descricao: 'comida 5 adriano sjsj', preco: 10.15 }
        ];
    
        $scope.fazerPedido = function (item) {
          //primeiro pedido
          if ($scope.conta.length == 0) {
            $scope.conta = novoPedido($scope.conta, item)
          } else if (existeOPedido($scope.conta, item)) {
            $scope.conta = pedidoRepetido($scope.conta, item)
          } else {
            $scope.conta = novoPedido($scope.conta, item)
          }
    
          $scope.total = somarConta($scope.conta)
        }
    
        $scope.cancelarPedido = function (pedido) {
          $scope.conta = $scope.conta.filter((item) => {
            if (item._id == pedido._id) {
              if (item.quant != 1) {
                item.quant--
                return item
              }
              return
            }
            return item
          })
    
          $scope.total = somarConta($scope.conta)
        }
    
        function somarConta(conta) {
          let total = 0
    
          conta.map((item) => {
            total = total + item.quant * item.preco
          })
    
          return total
        }
    
        function pedidoRepetido(conta, item) {
          conta.map((pedido) => {
            if (pedido._id == item._id) {
              pedido.quant++
              return pedido
            }
            return pedido
          })
    
          return conta
        }
    
        function existeOPedido(conta, item) {
          return conta.filter((pedido) => {
            if (pedido._id == item._id) {
              return true
            }
          }).length
        }
    
        function novoPedido(conta, item) {
          let pedido = angular.copy(item);
          pedido.quant = 1;
          conta.push(pedido);
          return conta;
        }
      }