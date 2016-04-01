(function(){
  angular.module('inventory')
  .service("ItemService", ItemService);

  ItemService.$inject = ["$http", "ErrorSuccessService"];
  function ItemService($http, ErrorSuccessService){
    this.takeInventory = (obj) =>{
      return $http.put("/logs/takeInventory", obj)
      .then(ErrorSuccessService.handleSuccess("Item successfully added"))
      .catch(ErrorSuccessService.handleError)
    }

    this.addItem = (item) => {
      return $http.post('/items/add', item)
      .then(ErrorSuccessService.handleSuccess("Item successfully added"))
      .catch(ErrorSuccessService.handleError)
    }

    this.update = (item) => {
      return $http.put('/items/update', item)
      .then(ErrorSuccessService.handleSuccess("Item successfully updated"))
      .catch(ErrorSuccessService.handleError)
    }
    this.remove = (id) => {
      return $http.delete(`/items/${id}`)
      .then(ErrorSuccessService.handleSuccess("Item successfully removed"))
      .catch(ErrorSuccessService.handleError)
    }

    this.getAll = () => $http.get('/items/all').catch(ErrorSuccessService.handleError);

    this.getAltogether = () => $http.get('/items/altogether').catch(ErrorSuccessService.handleError);
  }
})()
