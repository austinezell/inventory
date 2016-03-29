(function(){
  angular.module("inventory")
  .controller("BrowseCtrl", BrowseCtrl)

  BrowseCtrl.$inject =["InventoryService"];
  function BrowseCtrl(InventoryService){
    let vm = this;
    vm.inventory = {};
    getAll();

    function getAll(){
      InventoryService.getAll()
      .then(res=>{
        vm.inventory.CH1 = res.data.CH1;
        vm.inventory.CH2 = res.data.CH2;
        
      })
    }

  }
})()
