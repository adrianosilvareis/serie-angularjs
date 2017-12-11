angular.module('app.cardapio')
  .config(routeConfig)

function routeConfig($routeProvider) {

  $routeProvider
    .when('/cardapio', {
      templateUrl: 'app/cardapio/cardapio.html',
      controller: 'CardapioController'
    })
}