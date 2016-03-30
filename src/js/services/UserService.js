(function(){
  angular.module('inventory')
  .service("UserService", UserService);

  UserService.$inject = ["$http"];
  function UserService($http){
    this.addUser = (user) => $http.post('/users/add', user);

    this.getAll = () => $http.get('/users/all');

    this.removeUser = (id) => $http.delete(`/users/${id}`);

    this.update = (user) => $http.put("/users/", user);

  }
})()
