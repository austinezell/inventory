(function(){
  angular.module('inventory')
  .controller('AdminCtrl', AdminCtrl)

  AdminCtrl.$inject = ["UserService"]

  function AdminCtrl(UserService){
    let vm = this;
    vm.filter ={};
    vm.newUser ={};
    console.log('AdminCtrl loaded');

    vm.addUser = function(user) {
      console.log('hi');
      UserService.addUser(user)
      .then(res=>{
        console.log(res);
      },err=>{
        console.error(err);
      })
    }

  }
})()
