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
      const location = vm.searchFilter.location,
      key = `currentAmount${location}`,
      amount = item[key],
      itemId = item._id,
      update = {key, amount, itemId},
      inven = {location, amount},
      obj = {inven, update};
      ItemService.takeInventory(obj)
    }
    
    vm.openInvenLogModal = (item) =>{
      ModalService.createInvenLogModal(item)
      .then(()=>ModalService.modal.show())
    }
  }
})()
