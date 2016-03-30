(function(){
  angular.module('inventory')
  .controller('AddItemCtrl', AddItemCtrl);

  AddItemCtrl.$inject = ["InventoryService"];

  function AddItemCtrl(InventoryService){
    let vm = this;
    vm.title = "Add Item";
    vm.viewItem = {
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
