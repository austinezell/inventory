(function(){
  angular.module("inventory")
  .controller("BrowseCtrl", BrowseCtrl)

  BrowseCtrl.$inject =["InventoryService"];
  function BrowseCtrl(InventoryService){
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
    }]
    getAll();

    function getAll(){
      InventoryService.getAll()
      .then(res=>{
        vm.inventory = res.data;
      })
    }
  }
})()
