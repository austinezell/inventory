(function() {
  "use strict";
  angular.module("inventory")
  .controller('EditUserCtrl', EditUserCtrl)

  EditUserCtrl.$inject = ["UserService", "$ionicPopup"]

  function EditUserCtrl(UserService, $ionicPopup){
    let vm = this;
    vm.selected = {};
    vm.emailRegEx = /(\w+\.)*(\w+@\w+\.\w+)(\.\w+)*/
    getUsers()

    function getUsers(){
      UserService.getAll()
      .then(
        res => vm.users = res.data,
        err => console.error(err)
      )
    }

    vm.save = (user)=> {
      UserService.update(user)
      .then(res=>{
        vm.newUser = {};
        $ionicPopup.alert({
          title: "Success!",
          cssClass: "success",
          template: "User successfully updated."
        })
      },err=>{
        $ionicPopup.alert({
          title: "Error!",
          cssClass: "error",
          template: "Something went wrong. Call AJ."
        })
      })
    }
  }
}());
