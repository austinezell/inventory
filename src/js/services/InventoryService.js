(function(){
  angular.module('inventory')
  .service("InventoryService", InventoryService);

  InventoryService.$inject = ["$http"];
  function InventoryService($http){
    this.addItem = (item) => $http.post('/inventory/add', item);
  }
})()
