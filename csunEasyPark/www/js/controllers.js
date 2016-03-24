angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
	
})
.controller('vehicleListCtrl', function($scope,VehicleService) {

  $scope.vehicles = VehicleService.all();
  $scope.remove = function(vehicle) {
    VehicleService.remove(vehicle);
  };

})