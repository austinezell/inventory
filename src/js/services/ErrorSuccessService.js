(function() {
  'use strict';
  angular.module("inventory")
  .service("ErrorSuccessService", ErrorSuccessService)
  ErrorSuccessService.$inject = ["$ionicPopup"]
  function ErrorSuccessService($ionicPopup){
    this.handleError = (err, message)=>{
      $ionicPopup.alert({
        title: "Error!",
        cssClass: "error",
        template: message || "Something went wrong. Call AJ."
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
