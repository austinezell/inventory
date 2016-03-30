(function(){
  angular.module("inventory")

  .config(AdminStateConfig)
  AdminStateConfig.$inject = ["$stateProvider", "$urlRouterProvider"]
  function AdminStateConfig($stateProvider, $urlRouterProvider){
    $stateProvider

    .state("app.admin", {
      url: "/admin",
      views: {
        "content": {
          templateUrl: "./templates/admin/admin.html",
          controller: "AdminCtrl",
          controllerAs: "Admin"
        }
      }
    })
    .state("app.admin.addUser", {
      url: "/addUser",
      views:{
        "content@app":{
          templateUrl: "./templates/admin/addUser.html"
        }
      }
    })
    .state("app.admin.editUser", {
      url: "/editUser",
      views:{
        "content@app":{
          templateUrl: "./templates/admin/editUser.html"
        }
      }
    })
    .state("app.admin.removeUser", {
      url: "/removeUser",
      views:{
        "content@app":{
          templateUrl: "./templates/admin/removeUser.html"
        }
      }
    })
    .state("app.admin.removeItem", {
      url: "/removeItem",
      views:{
        "content@app":{
          templateUrl: "./templates/admin/removeItem.html"
        }
      }
    })
  }
})()
