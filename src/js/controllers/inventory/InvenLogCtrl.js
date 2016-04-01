(function(){
  angular.module('inventory')
  .controller('InvenLogCtrl', InvenLogCtrl)

  InvenLogCtrl.$inject = ["ModalService", "InventoryService"]

  function InvenLogCtrl(ModalService, InventoryService){
    let vm = this;
    vm.hasLogs = false;
    vm.item = ModalService.item;
    getLogs();

    function getLogs(){
      InventoryService.getLogs(vm.item._id)
      .then(res => {
        vm.logs = res.data;
        vm.hasLogs = true;
      })
    }

    vm.modalClose = (clearData) =>{
      ModalService.modal.remove()
      .then(()=>{
        ModalService.modal = null;
        if(clearData) ModalService.detailed = null;
      })
    }


  }
})()
