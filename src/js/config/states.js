(function(){
  angular.module('inventory')
  .config(StateConfig)
  StateConfig.$inject = ["$stateProvider", "$urlRouterProvider"]
  function StateConfig($stateProvider, $urlRouterProvider){
    $stateProvider
    .state("app", {
      url: "/app",
      abstract: true,
      templateUrl: "./templates/general/nav.html"
    })
    .state("app.browse", {
      url: "/browse",
      views:{
        "content":{
          templateUrl: "./templates/browse.html",
          controller: "BrowseCtrl",
          controllerAs: "Browse"
        }
      }
    })
    .state("app.addItem", {
      url: "/addItem",
      views:{
        "content":{
          templateUrl: "./templates/item.html",
          controller: "AddItemCtrl",
          controllerAs: "Item"
        }
      }
    })
    .state("app.editItem", {
      url: "/editItem",
      views:{
        "content":{
          templateUrl: "./templates/item.html",
          controller: "EditItemCtrl",
          controllerAs: "Item"
        }
      }
    })
    $urlRouterProvider.otherwise('/app/browse')
  }


})()
