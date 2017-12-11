
angular.module('app.home')
  .controller('HomeController', HomeController)

function HomeController(){

  const hc = this;

  hc.title = "Meu Restaurante"
  hc.label = "O melhor da cidade"
}