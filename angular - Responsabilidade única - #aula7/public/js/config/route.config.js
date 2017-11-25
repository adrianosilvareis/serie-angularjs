angular.module('myApp')
  .config(routeConfig)

function routeConfig($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'partials/cardapio.html',
      controller: 'CardapioController'
    })
}