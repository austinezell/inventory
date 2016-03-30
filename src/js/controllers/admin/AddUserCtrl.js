(function(){
  angular.module('inventory')
  .controller('AddUserCtrl', AddUserCtrl)

  AddUserCtrl.$inject = ["UserService", "$ionicPopup"]

  function AddUserCtrl(UserService, $ionicPopup){
    vm.newUser ={};
    vm.addUser = function(user) {
      UserService.addUser(user)
      .then(res=>{
        vm.newUser = {};
      },err=>{
        console.error(err);
      })
    }
  }
})()
