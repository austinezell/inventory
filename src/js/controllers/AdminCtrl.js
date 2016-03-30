(function(){
  angular.module('inventory')
  .controller('AdminCtrl', AdminCtrl)

  AdminCtrl.$inject = ["InventoryService", "$ionicPopup"]
  function AdminCtrl(InventoryService, $ionicPopup){
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
            let index = vm.inventory.indexOf(item);
            vm.inventory.splice(index, 1);
            vm.item = {};
          }, err=>{
            $ionicPopup.alert({
              title: "Error!",
              template: "Something went wrong. Call AJ."
            })
          })
        }
      })
    }
  }
})()
