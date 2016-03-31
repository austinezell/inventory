(function(){
  angular.module('inventory')
  .controller('EditItemCtrl', EditItemCtrl);

  EditItemCtrl.$inject = ["InventoryService", "ModalService", "$ionicPopup"];

  function EditItemCtrl(InventoryService, ModalService, $ionicPopup){
    let vm = this;
    vm.title = "Edit Item";
    vm.viewItem = ModalService.detailed;

    vm.save = function(item) {
      InventoryService.update(item)
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
