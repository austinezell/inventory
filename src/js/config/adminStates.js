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
          templateUrl: "./templates/admin/admin.html"
        }
      }
    })
    .state("app.admin.addUser", {
      url: "/addUser",
      views:{
        "content@app":{
          templateUrl: "./templates/admin/addUser.html",
          controller: "AddUserCtrl",
          controllerAs: "Admin"
        }
      }
    })
    .state("app.admin.editUser", {
      url: "/editUser",
      views:{
        "content@app":{
          templateUrl: "./templates/admin/editUser.html",
          controller: "EditUserCtrl",
          controllerAs: "Admin"
        }
      }
    })
    .state("app.admin.removeItem", {
      url: "/removeItem",
      views:{
        "content@app":{
          templateUrl: "./templates/admin/removeItem.html",
          controller: "RemoveItemCtrl",
          controllerAs: "Admin"
        }
      }
    })
  }
})()
