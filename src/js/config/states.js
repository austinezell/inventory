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
          controller: "BrowseCtrl",
          controllerAs: "Browse"
        }
      }
    })
    .state("app.inventory", {
      url: "/inventory",
      views:{
        "content":{
          templateUrl: "./templates/inventory.html",
          controller: "InventoryCtrl",
          controllerAs: "Inventory"
        }
      }
    })
    .state("app.addItem", {
      url: "/addItem",
      views:{
        "content":{
          templateUrl: "./templates/addItem.html",
          controller: "ItemCtrl",
          controllerAs: "Item"
        }
      }
    })
    $urlRouterProvider.otherwise('/app/browse')
  }


})()
