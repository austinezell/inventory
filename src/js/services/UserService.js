(function(){
  angular.module('inventory')
  .service("UserService", UserService);

  UserService.$inject = ["$http", "ErrorSuccessService"];
  function UserService($http, ErrorSuccessService){
    this.addUser = (user) => {
      return $http.post('/users/add', user)
      .then(ErrorSuccessService.handleSuccess("User successfully added"))
      .catch(ErrorSuccessService.handleError)
    }

    this.getAll = () => $http.get('/users/all').catch(ErrorSuccessService.handleError)

    this.removeUser = (id) => {
      return $http.delete(`/users/${id}`)
      .then(ErrorSuccessService.handleSuccess("User super fired!"))
      .catch(ErrorSuccessService.handleError)
    }

    this.update = (user) => {
      return $http.put("/users/", user)
      .then(ErrorSuccessService.handleSuccess("User successfully updated"))
      .catch(ErrorSuccessService.handleError)
    }

  }
})()
