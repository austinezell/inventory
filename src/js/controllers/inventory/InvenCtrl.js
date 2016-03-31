(function(){
  angular.module('inventory')
  .controller('InventoryCtrl', InventoryCtrl)

  InventoryCtrl.$inject = ["ItemService", "ModalService"]
  function InventoryCtrl(ItemService, ModalService){
    let vm = this;
    vm.searchFilter={
      department: "",
      location: "CH1"
    };
    getItems();
    function getItems(){
      ItemService.getAltogether()
      .then(res => vm.items = res.data)
    }
    vm.openItemModal = function(item){
      ModalService.createItemModal(item)
      .then(()=>ModalService.modal.show())
    }
    vm.update = (item)=>{
      ItemService.takeInventory(item)
    }



  }
})()
