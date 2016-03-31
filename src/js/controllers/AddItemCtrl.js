(function(){
  angular.module('inventory')
  .controller('AddItemCtrl', AddItemCtrl);

  AddItemCtrl.$inject = ["InventoryService", "$ionicPopup"];

  function AddItemCtrl(InventoryService, $ionicPopup){
    let vm = this;
    vm.title = "Add Item";
    vm.viewItem = {};
    vm.viewItem.thresholdCH1 = 0;
    vm.viewItem.thresholdCH2 = 0;
    vm.viewItem.stockAmountCH1 = 1;
    vm.viewItem.stockAmountCH2 = 1;
    vm.save = function(item) {
      InventoryService.addItem(item)
      .then(res=> {
        $ionicPopup.alert({
          title: "Success!",
          cssClass: "success",
          template: "Item successfully added!"
        })
      }, err=>{
        $ionicPopup.alert({
          title: "Error!",
          cssClass: "error",
          template: "Something went wrong. Call AJ."
        })
      })
    }

  }

})()
