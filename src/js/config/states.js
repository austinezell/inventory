(function(){
  angular.module('inventory')
  .config(StateConfig)
  StateConfig.$inject = ["$stateProvider", "$urlRouterProvider"]
  function StateConfig($stateProvider, $urlRouterProvider){
    $stateProvider
    .state("app", {
      url: "/app",
      abstract: true,
      templateUrl: "./templates/nav.html"
    })
    .state("app.browse", {
      url: "/browse",
      views:{
        "content":{
          templateUrl: "./templates/browse.html",
          controller: "browseCtrl"

        }

      }
      // controllerAs: "browse"
    })
    $urlRouterProvider.otherwise('/app/browse')
  }


})()
