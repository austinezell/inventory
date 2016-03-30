(function(){
  angular.module('inventory')
  .controller('AddUserCtrl', AddUserCtrl)

  AddUserCtrl.$inject = ["UserService", "$ionicPopup"]

  function AddUserCtrl(UserService, $ionicPopup){
    let vm = this;
    vm.newUser ={};
    vm.emailRegEx = /(\w+\.)*(\w+@\w+\.\w+)(\.\w+)*/
    vm.addUser = function(user) {
      UserService.addUser(user)
      .then(res=>{
        vm.newUser = {};
        $ionicPopup.alert({
          title: "Success!",
          cssClass: "success",
          template: "User successfully added."
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
})()
