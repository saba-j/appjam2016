angular.module('starter.services', [])

.factory('VehicleService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  //http://www.iconsdb.com/soylent-red-icons/chevrolet-icon.html
  var vehicles = [    
  { make: 'Chevrolet',vin:"1234567890", model: 'Cavalier',plate:'AB12CD5', img:'img/chevrolet-256.png',year:'2003',id: 0 },
  
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
  
var parkingsArr = [];

  return {
    all: function() {
      parkingsArr.length = 0
      $http({
        method: 'POST',
        data:{'id':1},
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
          parkingsArr.push(temp_p);

        }



      }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  }) .finally(function() {
       // Stop the ion-refresher from spinning
       //$scope.$broadcast('scroll.refreshComplete');
     });
  return parkingsArr;
},
remove: function(parking) {
  parkingsArr.splice(parkingsArr.indexOf(parking), 1);
},
get: function(parkingId) {
  for (var i = 0; i < parkingsArr.length; i++) {
    if (parkingsArr[i].id === parseInt(parkingId)) {
      return parkingsArr[i];
    }
  }
  return null;
}, 
add: function(parkingInfo){
  console.log(parkingInfo);
  parkingsArr.push(parkingInfo);
  console.log(parkingsArr);
  return true;
},
}
}])
.factory('MapService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  //http://www.iconsdb.com/soylent-red-icons/chevrolet-icon.html
  var parkingLocations = [
  
    {
    id : 1,
    name:"Model",
    Latitude:34.2374394,
    Longitude:-118.5276854,
    icon: 'img/model1.png'
  },
  {
    id : 2,
    name:"B1",
    Latitude:34.23615835,
    Longitude:-118.53354871,
    icon: 'img/b1.png'
  },
  {
    id : 3,
    name:"B2",
    Latitude:34.23683571,
    Longitude:-118.53355944,
    icon: 'img/b2.png'
  },
  {
    id : 4,
    name:"B3",
    Latitude:34.23801952,
    Longitude:-118.53361979,
    icon: 'img/b3.png'
  },
  {
    id : 5,
    name:"B4",
    Latitude:34.2400437,
    Longitude:-118.53357822,
    icon: 'img/b4.png'
  },
  {
    id : 6,
    name:"B5",
    Latitude:34.24165236,
    Longitude:-118.53365332,
    icon: 'img/b5.png'
  },
  {
    id : 7,
    name:"B6",
    Latitude:34.24291292,
    Longitude:-118.53272796,
    icon: 'img/b6.png'
  },

  {
    id : 8,
    name:"D6",
    Latitude:34.24352124,
    Longitude:-118.52903724,
    icon: 'img/d6.png'
  },


  {
    id : 9,
    name:"E6",
    Latitude:34.24371879,
    Longitude:-118.52855444,
    icon: 'img/e6.png'
  },
  {id : 10,
    name:"F10",
    Latitude:34.25091135,
    Longitude:-118.52647305,
    icon: 'img/f10.png'
  },
  {
    id : 11,
    name:"G3",
    Latitude:34.2382288,
    Longitude:-118.52395177,
    icon: 'img/g3.png'
  },

  {
    id : 12,
    name:"G4",
    Latitude:34.24067677,
    Longitude:-118.52383375,
    icon: 'img/g4.png'
  }
  ];


  return {
    all: function() {
      return parkingLocations;
    },
    get: function(id) {
  for (var i = 0; i < parkingLocations.length; i++) {
    if (parkingLocations[i].id === parseInt(id)) {
      return parkingLocations[i];
    }
  }
  return null;
},
  }
})
.factory('regService', function() {
  var registrationInfo ={start:0, end:0,current:0};
    return {
    setInfo: function(info) {
      registrationInfo.start = info.start;
      registrationInfo.end = info.end;
      registrationInfo.current = info.current;
    },
    getInfo: function(){
      return registrationInfo;
    }
  }
});