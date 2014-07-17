//Define an angular module for our app
var app = angular.module('myApp', []);

app.controller('userController', function($scope, $http) {
  getUser(); // Load all available tasks 
  
    function getUser(){  
    $http.post("ajax/getUser.php").success(function(data){
        $scope.user = data;
       });
  };
    
    
    
    
    
  $scope.addUser = function (user,droit,motpasse2) {
    $http.post("ajax/addUser.php?user="+user+"&droit="+droit, {'password': $scope.passwordInput}).success(function(data){
       
        getUser();
        $scope.userInput = "";
        $scope.droits = "";
        //$scope.passwordInput = "";
        
        });
  };
  $scope.deleteUser = function (user) {
    if(confirm("Are you sure to delete this line?")){
    $http.post("ajax/deleteUser.php?userID="+user).success(function(data){
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
