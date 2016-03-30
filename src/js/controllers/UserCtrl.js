(function(){
  angular.module('inventory')
  .controller('UserCtrl', UserCtrl)

  UserCtrl.$inject = ["UserService"]

  function UserCtrl(UserService){
    let vm = this;
    vm.filter ={};
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
