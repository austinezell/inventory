(function(){
  angular.module("inventory")
  .controller("BrowseCtrl", BrowseCtrl)

  BrowseCtrl.$inject =["InventoryService", "$ionicModal", "ModalService"];
  function BrowseCtrl(InventoryService, $ionicModal, ModalService){
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

    getAll();

    function getAll(){
      InventoryService.getAll()
      .then(res=>{
        vm.inventory = res.data;
      })
    };
    vm.openModal = function(item){
      ModalService.createItemModal(item)
      .then(()=>ModalService.modal.show())
    }
  }
})()
