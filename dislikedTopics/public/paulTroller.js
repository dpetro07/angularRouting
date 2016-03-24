angular.module('RoutingApp').controller('PaulTroller', function($scope, $stateParams) {
  $scope.nameFromUrl = $stateParams.name;
});
