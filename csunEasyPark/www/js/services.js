angular.module('starter.services', [])

.factory('VehicleService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  //http://www.iconsdb.com/soylent-red-icons/chevrolet-icon.html
  var vehicles = [    
  { make: 'Chevrolet',vin:"1234567890", model: 'Cavalier',plate:'AB12CD5', img:'img/path936.png',year:'2003',id: 0 },
  
  ];

  return {
  	all: function() {
  		return vehicles;
  	},
  	remove: function(vehicle) {
  		vehicles.splice(vehicles.indexOf(vehicle), 1);
  	},
  	get: function(vehicleId) {
  		for (var i = 0; i < vehicles.length; i++) {
  			if (vehicles[i].id === parseInt(vehicleId)) {
  				return vehicles[i];
  			}
  		}
  		return null;
  	}, 
  	add: function(vehicleInfo){
  		console.log(vehicleInfo);
  		vehicles.push(vehicleInfo);
  		console.log(vehicles);
  		return true;
  	},
  }
})
.factory('PaymentService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  //http://www.iconsdb.com/soylent-red-icons/chevrolet-icon.html
  var payments = [    
  { type: 'Visa',lastFour:"2234",exp:'2/2017',img:'img/visa.png',id: 0 },
  { type: 'Mastercard', lastFour:"5617",exp:'5/2019',img:'img/mastercard.png', id:1}
  ];

  return {
    all: function() {
      return payments;
    },
    remove: function(payment) {
      payments.splice(payments.indexOf(payment), 1);
    },
    get: function(paymentId) {
      for (var i = 0; i < payments.length; i++) {
        if (payments[i].id === parseInt(paymentId)) {
          return payments[i];
        }
      }
      return null;
    }, 
    add: function(paymentInfo){
      console.log(paymentInfo);
      payments.push(paymentInfo);
      console.log(payments);
      return true;
    },
  }
})
.factory('ParkingService', ['$http', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  //http://www.iconsdb.com/soylent-red-icons/chevrolet-icon.html
  var parkings = [];


  return {
    all: function() {
      console.log("all was called");
      $http({
        method: 'POST',
        data:{'id':6},
        dataType : 'application/x-www-form-urlencoded',
        url: 'http://umbernet.com/get_parking_update.php'
      }).then(function successCallback(response) {
        console.log(response);

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
          parkings.push(temp_p);
        
        }

     

      }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  }) .finally(function() {
       // Stop the ion-refresher from spinning
       //$scope.$broadcast('scroll.refreshComplete');
     });
      return parkings;
    },
    remove: function(parking) {
      parkings.splice(parkings.indexOf(parking), 1);
    },
    get: function(parkingId) {
      for (var i = 0; i < parkings.length; i++) {
        if (parkings[i].id === parseInt(parkingId)) {
          return parkings[i];
        }
      }
      return null;
    }, 
    add: function(parkingInfo){
      console.log(parkingInfo);
      parkings.push(parkingInfo);
      console.log(parkings);
      return true;
    },
  }
}])