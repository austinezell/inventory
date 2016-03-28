(function(){
  angular.module('inventory')
  .controller('ItemCtrl', ItemCtrl);

  ItemCtrl.$inject = ["$scope", "InventoryService"];

  function ItemCtrl($scope, InventoryService){
    let vm = this;
    vm.newItem = {};
    vm.save = (item) => console.log(item);

  }

})()
