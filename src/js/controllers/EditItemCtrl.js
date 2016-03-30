(function(){
  angular.module('inventory')
  .controller('EditItemCtrl', EditItemCtrl);

  EditItemCtrl.$inject = ["InventoryService"];

  function EditItemCtrl(InventoryService){
    let vm = this;
    vm.title = "Edit Item";

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
