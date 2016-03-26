(function(){
  angular.module('inventory')
  .config(StateConfig)
  StateConfig.$inject = ["$stateProvider", "$urlRouterProvider"]
  function StateConfig($stateProvider, $urlRouterProvider){
    $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./templates/home.html"
    })
    .state("items", {
      url: "/items",
      templateUrl: "./templates/home.html"
    })
  })


})()
