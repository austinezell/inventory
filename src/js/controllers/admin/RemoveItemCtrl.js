(function(){
  angular.module('inventory')
  .controller('RemoveItemCtrl', RemoveItemCtrl)

  RemoveItemCtrl.$inject = ["ItemService", "$ionicPopup"]
  function RemoveItemCtrl(ItemService, $ionicPopup){
    let vm = this;
    vm.filter ={};
    vm.item = {};
    getInventory()

    function getInventory(){
      ItemService.getAltogether()
      .then(res=> vm.inventory = res.data);
    }

    vm.confirmDelete = function(item){
      $ionicPopup.confirm({
        title: "Delete this item?",
        template: "This item will be completely removed, yessSss?"
      }).then((res)=>{
        if (res){
          ItemService.remove(item._id)
          .then(res=>{
            let index = vm.inventory.indexOf(item);
            vm.inventory.splice(index, 1);
            vm.item = {};
          })
        }
      })
    }
  }
})()
