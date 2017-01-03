var app = angular.module("GithubSearch",[]);

app.factory('repoSearch',['$http', function ($http) {

  var rS = {};

  rS.getList = function (userGithub) {
    return $http({method:'GET',url: 'https://api.github.com/users/'+userGithub+'/repos'});
  }

  return rS;
}]);

app.controller("repoController", ['$scope','repoSearch',function ($scope,repoSearch){
  $scope.userGithub = "";

  $scope.setUser = function () {
    repoSearch.getList($scope.userGithub).success(function (data) {
      $scope.repos = data;
    });
  }

  $scope.sortColum = [{name:'Name',val: 'name'},{name:'Date',val: 'created_at'}];
  $scope.selectedItem;
    $scope.dropdownSort = function (item) {
        $scope.selectedItem = item;
    }
}]);
