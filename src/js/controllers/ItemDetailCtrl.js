(function() {
  'use strict';
  angular.module("inventory")
  .controller("ItemDetailCtrl", ItemDetailCtrl)
  ItemDetailCtrl.$inject = ["ModalService"];

  function ItemDetailCtrl(ModalService){
    let vm = this;
    vm.item = ModalService.detailed;

    vm.modalClose = () =>{
      ModalService.modal.remove()
      .then(()=>ModalService.modal = null);
      ModalService.detailed = null;
    }
  }
}());
