//Define an angular module for our app
var app = angular.module('myApp', []);

app.controller('userController', function($scope, $http) {
  getUser(); // Load all available tasks 
  function getUser(){  
  $http.post("ajax/getUser.php").success(function(data){
        $scope.user = data;
       });
  };
  $scope.addUser = function (user) {
    $http.post("ajax/addUser.php?user="+user).success(function(data){
        getUser();
        $scope.userInput = "";
      });
  };
  $scope.deleteUser = function (user) {
    if(confirm("Are you sure to delete this line?")){
    $http.post("ajax/deleteTask.php?taskID="+user).success(function(data){
        getUser();
      });
    }
  };

  $scope.toggleDroit = function(item, droit, user) {
    if(droit=='2'){droit='0';}else{droit='2';}
      $http.post("ajax/updateUser.php?userID="+item+"&droit="+droit).success(function(data){
        getUser();
      });
  };

});
