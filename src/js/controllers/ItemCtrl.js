(function(){
  angular.module('inventory')
  .controller('ItemCtrl', ItemCtrl);

  ItemCtrl.$inject = ["$scope", "InventoryService"];

  function ItemCtrl($scope, InventoryService){
    let vm = this;
    vm.newItem = {
      threshold: {
        CH1: 0,
        CH2: 0
      },
      stockAmount: {
        CH1: 1,
        CH2: 1
      }
    };
    vm.save = function(item) {
      InventoryService.addItem(item)
      .then(res=> {
        console.log(res);
      }, err=>{
        console.error(err);
      })
    }

  }

})()
