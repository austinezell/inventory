(function(){
  angular.module('inventory')
  .controller('RemoveUserCtrl', RemoveUserCtrl)

  RemoveUserCtrl.$inject = ["UserService", "$ionicPopup"]

  function RemoveUserCtrl(UserService, $ionicPopup){
    let vm = this;
    vm.users =[];
    getUsers();

    function getUsers(){
      UserService.getAll()
      .then(res => vm.users = res.data)
    }

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

})()
