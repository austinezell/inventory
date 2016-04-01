(function(){
  angular.module('inventory')
  .service("ModalService", ModalService);

  ModalService.$inject = ["$ionicModal"];
  function ModalService($ionicModal){
    this.detaied = null;
    this.modal = null;
    this.createItemModal = (item) =>{
      this.item = item;
      return $ionicModal.fromTemplateUrl('./templates/itemDetailModal.html')
      .then((modal)=> {
        this.modal = modal;
      });
    }

    this.createInvenLogModal = (item) => {
      this.item = item;
      return $ionicModal.fromTemplateUrl('./templates/inventory/invenLog.html')
      .then((modal)=> {
        this.modal = modal;
      });
    }
  }
})()
