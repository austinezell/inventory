(function(){
  angular.module('inventory')
  .controller('InvenLogCtrl', InvenLogCtrl)

  InvenLogCtrl.$inject = ["ModalService", "InventoryService"]

  function InvenLogCtrl(ModalService, InventoryService){
    let vm = this
    vm.hasLogs = false;
    vm.item = ModalService.item;
    let location = ModalService.location;
    vm.item.locationStock = vm.item[`stockAmount${location}`];
    vm.filterDate = "-date";
    getLogs();

    function getLogs(){
      InventoryService.getLogs(vm.item._id, location)
      .then(res => {
        vm.logs = res.data.map(log=>{
          log.date = new Date(log.date);
          return log;
        });
        vm.hasLogs = true;
      })
    }

    vm.modalClose = (clearData) =>{
      ModalService.modal.remove()
      .then(()=>{
        ModalService.modal = null;
        if(clearData) ModalService.item = null;
      })
    }


  }
})()
