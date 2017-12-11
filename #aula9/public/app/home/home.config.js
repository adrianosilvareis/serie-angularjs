angular.module('app.home')
  .config(routing)

function routing($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    })
}