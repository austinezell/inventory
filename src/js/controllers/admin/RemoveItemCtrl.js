(function(){
  angular.module('inventory')
  .controller('RemoveItemCtrl', RemoveItemCtrl)

  RemoveItemCtrl.$inject = ["InventoryService", "$ionicPopup"]
  function RemoveItemCtrl(InventoryService, $ionicPopup){
    let vm = this;
    vm.filter ={};
    vm.item = {};
    getAll()

    function getAll(){
      InventoryService.getAltogether()
      .then(res=>{
        vm.inventory = res.data;
      }, err=>{
        console.error(err)
      })
    }

    vm.confirmDelete = function(item){
      $ionicPopup.confirm({
        title: "Delete this item?",
        template: "This item will be completely removed, yessSss?"
      }).then((res)=>{
        if (res){
          InventoryService.remove(item._id)
          .then(res=>{
            $ionicPopup.alert({
              title: "Success!",
              cssClass: "success",
              template: "Item successfully removed."
            })
            let index = vm.inventory.indexOf(item);
            vm.inventory.splice(index, 1);
            vm.item = {};
          }, err=>{
            $ionicPopup.alert({
              title: "Error!",
              cssClass: "error",
              template: "Something went wrong. Call AJ."
            })
          })
        }
      })
    }
  }
})()
