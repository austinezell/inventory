(function() {
  'use strict';
  angular.module("inventory")
  .service("ErrorSuccessService", ErrorSuccessService)
  ErrorSuccessService.$inject = ["$ionicPopup"]
  function ErrorSuccessService($ionicPopup){
    this.handleError = ()=>{
      $ionicPopup.alert({
        title: "Error!",
        cssClass: "error",
        template: "Something went wrong. Call AJ."
      })
    }
    this.handleSuccess = (message) =>{
      return function(res){
        $ionicPopup.alert({
          title: "Success!",
          cssClass: "success",
          template: message
        })
      }
    }
  }

}());
