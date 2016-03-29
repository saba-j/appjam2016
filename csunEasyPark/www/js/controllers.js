angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$ionicHistory,$state) {
    $scope.gotohome = function(){
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('app.home');
    }
})
.controller('homeCtrl', function($scope,$timeout,$ionicHistory) {
	$ionicHistory.nextViewOptions({
		disableBack: true
	});

    $scope.current =        27;
    $scope.max =            50;
    $scope.offset =         0;
    $scope.timerCurrent =   0;
    $scope.uploadCurrent =  0;
    $scope.stroke =         15;
    $scope.radius =         125;
    $scope.isSemi =         false;
    $scope.rounded =        false;
    $scope.responsive =     false;
    $scope.clockwise =      true;
    $scope.currentColor =   '#45ccce';
    $scope.bgColor =        '#eaeaea';
    $scope.duration =       800;
    $scope.currentAnimation = 'easeOutCubic';
    $scope.animationDelay = 0;

    $scope.getStyle = function(){
        var transform = ($scope.isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

        return {
            'top': $scope.isSemi ? 'auto' : '50%',
            'bottom': $scope.isSemi ? '5%' : 'auto',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': $scope.radius/3.5 + 'px'
        };
    };
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

.controller('paymentListCtrl', function($scope,$ionicPopup,$timeout,$state,$stateParams,$ionicHistory,PaymentService) {
    $scope.payments = PaymentService.all();
    $scope.remove = function(payment) {
        PaymentService.remove(payment);
    }
})
.controller('parkingListCtrl', function($scope,$ionicPopup,$timeout,$state,$stateParams,$ionicHistory,ParkingService) {
    $scope.parkings = ParkingService.all();
    $scope.remove = function(parking) {
        ParkingService.remove(parking);
    }
})