angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
	
})
.controller('homeCtrl', function($scope,$timeout,$ionicHistory) {
	$ionicHistory.nextViewOptions({
		disableBack: true
	});

	$scope.vm = {
		options : {  
			chart: {
    type: 'pieChart',
    height: 500,
    x: function(d){return d.key;},
    y: function(d){return d.y;},
    showLabels: false,
    duration: 500,
    labelThreshold: 0.01,
    labelSunbeamLayout: true,
    width: 320,
    title: '80 minute',
    donut: true,
    tooltips: false,
    legend: {
      margin: {
        top: 5,
        right: 0,
        bottom: 5,
        left: 0
      }
    }
  }
		},
		data : [  
		{
			key: "One",
			y: 5
		},
		{
			key: "Two",
			y: 2
		},

		]

	}


})
.controller('vehicleListCtrl', function($scope,$ionicPopup,$timeout,$state,$stateParams,$ionicHistory,VehicleService) {

	$scope.vehicles = VehicleService.all();
	$scope.remove = function(vehicle) {
		VehicleService.remove(vehicle);
	};

     // An alert dialog
     $scope.showAlert = function() {
     	var alertPopup = $ionicPopup.alert({
     		title: 'Where is my VIN# ?',
     		template: 'The VIN can be found by looking at the dashboard on the driver\'s side of the vehicle. The easiest way to view it is to stand outside the vehicle on the driver\'s side and look at the corner of the dashboard where it meets the windshield.'
     	});
     	alertPopup.then(function(res) {

     	});
     };

     $scope.carRegistrationInfo = {
     	id:"",
     	vin:"",
     	plate:"",
     	make:"BMW",
     	model:"M2 Coupe",
     	year:"2014",
     	img:"img/path937.png"
     }

     $scope.carRegistrationInfoInitial = {
     	vin:"",
     	plate:"",
     	make:"",
     	model:"",
     	year:"",
     	img:"img/path937.png"
     }

     $scope.submit_startRegisteringNewCar = function(){
     	alert("he");
     	return null;
     }

     $scope.submit_vin = function(){
     	$state.go('app.vehicle_register2',{"vin":$scope.carRegistrationInfo.vin});
     }

     $scope.submit_newCar = function(){
     	var lastId = $scope.vehicles[$scope.vehicles.length-1].id;
     	$scope.carRegistrationInfo.id = lastId+1;
     	$scope.carRegistrationInfo.plate = $scope.carRegistrationInfo.plate.toUpperCase(); 
     	$scope.carRegistrationInfovin = $stateParams.vin;
     	VehicleService.add($scope.carRegistrationInfo);
     	$ionicHistory.nextViewOptions({
     		disableBack: true
     	});
     	console.log($scope.vehicles);
     	$state.go('app.vehicle');	
     }

 })