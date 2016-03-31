(function(){
  angular.module('inventory')
  .service("ModalService", ModalService);

  ModalService.$inject = ["$ionicModal"];
  function ModalService($ionicModal){
    this.detaied = null;
    this.createItemModal = (item) =>{
      this.detailed = item;
      return $ionicModal.fromTemplateUrl('./templates/itemDetailModal.html')
      .then((modal)=> {
        this.modal = modal;
      });
    }

  }
})()
