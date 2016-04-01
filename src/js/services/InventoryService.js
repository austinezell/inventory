(function(){
  angular.module('inventory')
  .service("InventoryService", InventoryService);

  InventoryService.$inject = ["$http", "ErrorSuccessService"];
  function InventoryService($http, ErrorSuccessService){
    this.takeInventory = (obj) =>{
      return $http.put("/logs/takeInventory", obj)
      .then(ErrorSuccessService.handleSuccess("Inventory logged!"))
      .catch(ErrorSuccessService.handleError)
    }

    this.getLogs = (id, location) => $http.get(`/logs/inventory/${id}/${location}`).catch(ErrorSuccessService.handleError)

  }
})()
