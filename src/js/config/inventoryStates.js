(function(){
  angular.module('inventory')
  .config(InventoryStatesConfig)
  InventoryStatesConfig.$inject = ["$stateProvider"]
  function InventoryStatesConfig($stateProvider){
    $stateProvider
    .state("app.inventory", {
      url: "/inventory",
      views:{
        "content":{
          templateUrl: "./templates/inventory/inventory.html",
          controller: "InventoryCtrl",
          controllerAs: "Inventory"
        }
      }
    })
    .state("app.inventory.log", {
      url: "/log",
      views:{
        "content@app":{
          templateUrl: "./templates/inventory/invenLog.html",
          controller: "InvenLogCtrl",
          controllerAs: "Inventory"
        }
      }
    })
    .state("app.inventory.orders", {
      url: "/orders",
      views:{
        "content@app":{
          templateUrl: "./templates/invetory/orderLog.html",
          controller: "OrderLogCtrl",
          controllerAs: "Inventory"
        }
      }
    })

  }
})();
