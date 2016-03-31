(function() {
  "use strict";
  angular.module("inventory")
  .controller('EditUserCtrl', EditUserCtrl);

  EditUserCtrl.$inject = ["UserService"];

  function EditUserCtrl(UserService){
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
    }
  }
}());
