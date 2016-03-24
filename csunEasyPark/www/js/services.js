angular.module('starter.services', [])

.factory('VehicleService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  //http://www.iconsdb.com/soylent-red-icons/chevrolet-icon.html
  var vehicles = [    
  { title: 'Chevrolet Cavalier',plate:'AB12CD5', img:'img/chevrolet-256.png',year:'2003',id: 1 },
  { title: 'Ford Mustang',plate:'TL78RC6',img:'img/ford-256.png', year:'2009',id: 2 },
  { title: 'Toyota Camry',plate:'UG90FN1',img:'img/toyota-256.png', year:'2015',id: 3 }
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
  	}
  };
});