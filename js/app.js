var app = angular.module("GithubSearch",[]);

app.controller("repoController", ['$scope','$http', function ($scope,$http){
  $http({method:'GET',url: 'https://api.github.com/users/DavidRnR/repos'}).success(function(repos){
    console.log(repos);
    $scope.repos = repos;
  })
  .error(function(er) {
    console.log(er);
  });
}]);
