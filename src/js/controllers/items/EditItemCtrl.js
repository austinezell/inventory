(function(){
  angular.module('inventory')
  .controller('EditItemCtrl', EditItemCtrl);

  EditItemCtrl.$inject = ["ItemService", "ModalService", "$ionicPopup"];

  function EditItemCtrl(ItemService, ModalService, $ionicPopup){
    let vm = this;
    vm.title = "Edit Item";
    vm.viewItem = ModalService.detailed;

    vm.save = (item) => ItemService.update(item);

  }

})()
