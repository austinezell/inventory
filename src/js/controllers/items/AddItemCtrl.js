(function(){
  angular.module('inventory')
  .controller('AddItemCtrl', AddItemCtrl);

  AddItemCtrl.$inject = ["ItemService", "ErrorSuccessService"];

  function AddItemCtrl(ItemService, ErrorSuccessService){
    let vm = this;
    vm.title = "Add Item";
    vm.viewItem = {
      thresholdCH1: 0,
      thresholdCH2: 0,
      stockAmountCH1: 1,
      stockAmountCH2: 1
    }
    vm.save = function(item) {
      ItemService.addItem(item)
      .then(()=> vm.viewItem = {
        thresholdCH1: 0,
        thresholdCH2: 0,
        stockAmountCH1: 1,
        stockAmountCH2: 1
      });
    }

  }

})()
