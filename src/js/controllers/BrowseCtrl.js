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
      filter: "foodstuffs"
    },{
      name: "Household",
      filter: "household"
    }]
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
