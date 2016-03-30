(function() {
  "use strict";
  angular.module("inventory")
  .controller('EditUserCtrl', EditUserCtrl)

  EditUserCtrl.$inject = ["UserService", "$ionicPopup"]

  function EditUserCtrl(UserService, $ionicPopup){

  }
}());
