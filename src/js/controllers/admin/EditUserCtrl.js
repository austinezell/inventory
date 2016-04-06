(function() {
  "use strict";
  angular.module("inventory")
  .controller('EditUserCtrl', EditUserCtrl);

  EditUserCtrl.$inject = ["UserService", "$ionicPopup"];

  function EditUserCtrl(UserService, $ionicPopup){
    let vm = this;
    vm.selected = {};
    vm.emailRegEx = /(\w+\.)*(\w+@\w+\.\w+)(\.\w+)*/
    getUsers()

    function getUsers(){
      UserService.getAll()
      .then(res => vm.users = res.data)
    }

    vm.save = (user)=> {
      UserService.update(user)
    };

    vm.removeUser = function(user){
      $ionicPopup.confirm({
        title: "Remove User",
        template: "Is this guy hecka fired?"
      })
      .then(res=>{
        if(res){
          UserService.removeUser(user._id)
          .then(res=>{
            let index = vm.users.indexOf(user);
            vm.users.splice(index, 1);
            vm.selected = {};
          })
        }
      })
    }
  }
}());
