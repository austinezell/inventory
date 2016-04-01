(function(){
  angular.module('inventory')
  .controller('AddItemCtrl', AddItemCtrl);

  AddItemCtrl.$inject = ["ItemService", "ErrorSuccessService"];

  function AddItemCtrl(ItemService, ErrorSuccessService){
    let vm = this;
    vm.title = "Add Item";
    viewItem = {};
    viewItem.thresholdCH1 = 0;
    viewItem.thresholdCH2 = 0;
    viewItem.stockAmountCH1 = 1;
    viewItem.stockAmountCH2 = 1;
    vm.viewItem = viewItem;
    vm.save = function(item) {
      ItemService.addItem(item)
      .then(()=> vm.viewItem = viewItem);
    }

  }

})()
