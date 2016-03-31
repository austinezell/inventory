(function(){
  angular.module('inventory')
  .controller('AddUserCtrl', AddUserCtrl)

  AddUserCtrl.$inject = ["UserService"]

  function AddUserCtrl(UserService){
    let vm = this;
    vm.newUser ={};
    vm.emailRegEx = /(\w+\.)*(\w+@\w+\.\w+)(\.\w+)*/
    vm.addUser = function(user) {
      UserService.addUser(user)
      .then(()=>vm.newUser = {});
    }
  }
})()
