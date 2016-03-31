angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$ionicHistory,$state) {
    $scope.gotohome = function(){
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('app.home');
    }
})
.controller('homeCtrl', function($scope,$timeout,$ionicHistory,regService) {
	$ionicHistory.nextViewOptions({
		disableBack: true
	});

    $scope.reg = regService.getInfo();
    
    
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
.controller('parkingListCtrl', function($scope,$ionicPopup,$timeout,$state,$stateParams,$ionicHistory,$http,ParkingService) {
    $scope.gotohome = function(){
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('app.home');
    }

    $scope.gotoMap=function(){
       $state.go('app.map'); 
   }


   $scope.parkings = ParkingService.all();
   $scope.remove = function(parking) {
    ParkingService.remove(parking);
}

$scope.doRefresh = function(){
    {
      parkingsArr2 = [];    
      $http({
        method: 'POST',
        data:{'id':1},
        dataType : 'application/x-www-form-urlencoded',
        url: 'http://umbernet.com/get_parking_update.php'
    }).then(function successCallback(response) {

        for(i=0; i < response.data.length; i++){
          var temp_p = {
            'name': response.data[i].parking_name,
            'id':response.data[i].id*1,
            'policy':response.data[i].policy,
            'max':(response.data[i].max*1), 
            'current':(response.data[i].current*1),
        };
        if(temp_p.id !== 1){
            temp_p.current = Math.floor((Math.random() * temp_p.max)); 
        }
        parkingsArr2.push(temp_p);
        
    }

    $scope.parkings = parkingsArr2;

}, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
}) .finally(function() {
       // Stop the ion-refresher from spinning
       //$scope.$broadcast('scroll.refreshComplete');
   });

}
}
})
.controller('MapCtrl', function($scope, $ionicLoading, $compile,$ionicHistory,$state,MapService,ParkingService) {
    //http://www.mapcoordinates.net/en
    $scope.gotohome = function(){
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('app.home');
    };

    $scope.doRefresh = function(){
        init();
    };

    var init = function () {
        markers_info = MapService.all();
        
// center the map on csun
var myLatlng = new google.maps.LatLng(34.241594 , -118.528662);

var mapOptions = {
  center: myLatlng,
  zoom: 15,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("map"),mapOptions);


        // adding markers
        var markers_obj = [];
        var position_obj =[];
        var infowindow =[];
        var c = ParkingService.all();
        setTimeout(function(){
            for(i=0; i < markers_info.length; i++){
                position_obj[i] = new google.maps.LatLng(markers_info[i].Latitude , markers_info[i].Longitude);
                addMarkerWithTimeout(position_obj[i], ((i+1)*200), markers_info[i].name, markers_info[i].icon,markers_info[i].id,c);
                    //Marker + infowindow + angularjs compiled ng-click
                }
            }, 100);

        function addMarkerWithTimeout(position, timeout, name, icon,id,c) {
            window.setTimeout(function() {
                var temp_marker = new google.maps.Marker({
                  position: position,
                  map: map,
                  title: name,
                  icon: icon,
                  animation: google.maps.Animation.DROP,
              });
                markers_obj.push(temp_marker);
                var c = ParkingService.get(id);
                var temp_infoWindow = new google.maps.InfoWindow({
                  content: "Available: <b>"+c.current+"</b>"
              });

                infowindow.push(temp_infoWindow);

                google.maps.event.addListener(temp_marker, 'click', function () {
                  temp_infoWindow.open($scope.map, temp_marker);
              });
            }, timeout);

        }

        $scope.map = map;
    }
    init();



    $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
      }

      $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
      });

      navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
      }, function(error) {
          alert('Unable to get location: ' + error.message);
      });
  };

  $scope.clickTest = function() {
    alert('Example of infowindow with ng-click')
};
})
.controller('registerCtrl', function($scope, $rootScope, $cordovaBarcodeScanner,$ionicHistory,$state, $ionicPlatform,regService,VehicleService,PaymentService) {
    $scope.level_0=true;
    $scope.level_1=false;
    $scope.level_2=false;
    $scope.level_3=false;

    init = function(){
        $scope.level_0=true;
        $scope.level_1=false;
        $scope.level_2=false;
        $scope.level_3=false;
        var val = regService.getInfo();
        console.log(val);
        $scope.selectedDuration = val.current;

    }

    init();

    $scope.scanNow = function(){
      $scope.level_0=false;
      $scope.level_1=true;
      $scope.level_2=false;
      $scope.level_3=false;  
  }

  $scope.payments = PaymentService.all();
  $scope.vehicles = VehicleService.all();
  $scope.selectedCar = {};
  $scope.selectedPayment = {};
  $scope.selectedDuration = 0;
  $scope.spot_id ="M1";
  $scope.chooseCar = function (vehicle){
    $scope.selectedCar = vehicle;
    $scope.level_0=false;
    $scope.level_1=false;
    $scope.level_2=true;
    $scope.level_3=false;
}
$scope.choosePayment = function(payment){
    $scope.selectedPayment = payment;
    $scope.level_0=false;
    $scope.level_1=false;
    $scope.level_2=false;
    $scope.level_3=true;
}

$scope.finishRegister = function(val){
    $scope.level_0=true;
    $scope.level_1=false;
    $scope.level_2=false;
    $scope.level_3=false;

    var newData = {start:0, end:val,current:val}
    regService.setInfo(newData);
    console.log(newData);
    $ionicHistory.nextViewOptions({
        disableBack: true
    });
    $state.go('app.home');
}

$scope.scanBarcode = function() {
    scan();
};

function scan() {
    var detachBarcodeScannerBackHandler = $ionicPlatform.registerBackButtonAction(function () {
        detachBarcodeScannerBackHandler();
        alert(cordova.plugins.barcodeScanner.Encode);
    }, 1000);

    $cordovaBarcodeScanner.scan().then(function(barcodeData) {
        if (!barcodeData.cancelled) {
            detachBarcodeScannerBackHandler();
        }
    }, function(error) { console.log(error); });
}
});