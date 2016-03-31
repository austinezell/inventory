(function(){
  angular.module('inventory')
  .controller('AddItemCtrl', AddItemCtrl);

  AddItemCtrl.$inject = ["ItemService", "ErrorSuccessService"];

  function AddItemCtrl(ItemService, ErrorSuccessService){
    let vm = this;
    vm.title = "Add Item";
    vm.viewItem = {};
    vm.viewItem.thresholdCH1 = 0;
    vm.viewItem.thresholdCH2 = 0;
    vm.viewItem.stockAmountCH1 = 1;
    vm.viewItem.stockAmountCH2 = 1;
    vm.save = function(item) {
      ItemService.addItem(item)
      .then(()=> vm.viewItem = {});
    }

  }

})()
