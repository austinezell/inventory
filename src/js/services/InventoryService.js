(function(){
  angular.module('inventory')
  .service("InventoryService", InventoryService);

  InventoryService.$inject = ["$http"];
  function InventoryService($http){
    this.addItem = (item) => $http.post('/inventory/add', item);

    this.getAll = () => $http.get('/inventory/all');

    this.getAltogether = () => $http.get('/inventory/altogether');

    this.remove = (id) => $http.delete(`/inventory/remove/${id}`)
  }
})()
