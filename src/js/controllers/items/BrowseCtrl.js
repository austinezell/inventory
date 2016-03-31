(function(){
  angular.module("inventory")
  .controller("BrowseCtrl", BrowseCtrl)

  BrowseCtrl.$inject =["ItemService", "ModalService"];
  function BrowseCtrl(ItemService, ModalService){
    let vm = this;
    vm.inventory = {};
    vm.filters = [{
      name: "Office",
      filter: "office"
    }, {
      name: "Food Service",
      filter: "foodService"
    },{
      name: "Household",
      filter: "household"
    }];

    getItems();

    function getItems(){
      ItemService.getAll()
      .then(res=> vm.inventory = res.data)
    };
    vm.openModal = function(item){
      ModalService.createItemModal(item)
      .then(()=>ModalService.modal.show())
    }
  }
})()
