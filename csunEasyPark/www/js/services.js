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
.factory('ParkingService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  //http://www.iconsdb.com/soylent-red-icons/chevrolet-icon.html
  var parkings = [    
  {
    'name': 'B1',
    'id':0,
    'policy':'all',
    'round-progress':'', 
    'max':480, 
    'current':38,
    'color':'#45BF55',
    'bgcolor':'#eaeaea',
    'radius':150,
    'stroke':75,
    'semi':false,
    'rounded':false,
    'clockwise':true,
    'responsive':true,
    'duration':800,
    'animation':'easeInOutQuart',
    'animation-delay':100,
    'on-render':'showPreciseCurrent'
  },
  {
    'name': 'B2',
    'id':1,
    'policy':'all',
    'round-progress':'', 
    'max':513, 
    'current':470,
    'color':'#e42112',
    'bgcolor':'#eaeaea',
    'radius':150,
    'stroke':75,
    'semi':false,
    'rounded':false,
    'clockwise':true,
    'responsive':true,
    'duration':800,
    'animation':'easeInOutQuart',
    'animation-delay':100,
    'on-render':'showPreciseCurrent'
  },
    {
    'name': 'B3',
    'id':2,
    'policy':'all',
    'round-progress':'', 
    'max':2063, 
    'current':990,
    'color':'#FFDC00',
    'bgcolor':'#eaeaea',
    'radius':150,
    'stroke':75,
    'semi':false,
    'rounded':false,
    'clockwise':true,
    'responsive':true,
    'duration':800,
    'animation':'easeInOutQuart',
    'animation-delay':100,
    'on-render':'showPreciseCurrent'
  },
      {
    'name': 'B4',
    'id':3,
    'policy':'faculty only',
    'round-progress':'', 
    'max':445, 
    'current':150,
    'color':'#45BF55',
    'bgcolor':'#eaeaea',
    'radius':150,
    'stroke':75,
    'semi':false,
    'rounded':false,
    'clockwise':true,
    'responsive':true,
    'duration':800,
    'animation':'easeInOutQuart',
    'animation-delay':100,
    'on-render':'showPreciseCurrent'
  },
        {
    'name': 'B5',
    'id':4,
    'policy':'all',
    'round-progress':'', 
    'max':1361, 
    'current':301,
    'color':'#45BF55',
    'bgcolor':'#eaeaea',
    'radius':150,
    'stroke':75,
    'semi':false,
    'rounded':false,
    'clockwise':true,
    'responsive':true,
    'duration':800,
    'animation':'easeInOutQuart',
    'animation-delay':100,
    'on-render':'showPreciseCurrent'
  },
          {
    'name': 'B6',
    'id':5,
    'policy':'all',
    'round-progress':'', 
    'max':734, 
    'current':734,
    'color':'#e42112',
    'bgcolor':'#eaeaea',
    'radius':150,
    'stroke':75,
    'semi':false,
    'rounded':false,
    'clockwise':true,
    'responsive':true,
    'duration':800,
    'animation':'easeInOutQuart',
    'animation-delay':100,
    'on-render':'showPreciseCurrent'
  },
            {
    'name': 'D6',
    'id':6,
    'policy':'all',
    'round-progress':'', 
    'max':278, 
    'current':75,
    'color':'#45BF55',
    'bgcolor':'#eaeaea',
    'radius':150,
    'stroke':75,
    'semi':false,
    'rounded':false,
    'clockwise':true,
    'responsive':true,
    'duration':800,
    'animation':'easeInOutQuart',
    'animation-delay':100,
    'on-render':'showPreciseCurrent'
  },
              {
    'name': 'E6',
    'id':7,
    'policy':'all',
    'round-progress':'', 
    'max':448, 
    'current':15,
    'color':'#45BF55',
    'bgcolor':'#eaeaea',
    'radius':150,
    'stroke':75,
    'semi':false,
    'rounded':false,
    'clockwise':true,
    'responsive':true,
    'duration':800,
    'animation':'easeInOutQuart',
    'animation-delay':100,
    'on-render':'showPreciseCurrent'
  },
                {
    'name': 'F10',
    'id':8,
    'policy':'all',
    'round-progress':'', 
    'max':890, 
    'current':350,
    'color':'#45BF55',
    'bgcolor':'#eaeaea',
    'radius':150,
    'stroke':75,
    'semi':false,
    'rounded':false,
    'clockwise':true,
    'responsive':true,
    'duration':800,
    'animation':'easeInOutQuart',
    'animation-delay':100,
    'on-render':'showPreciseCurrent'
  },
                  {
    'name': 'G3',
    'id':9,
    'policy':'all',
    'round-progress':'', 
    'max':979, 
    'current':500,
    'color':'#FFDC00',
    'bgcolor':'#eaeaea',
    'radius':150,
    'stroke':75,
    'semi':false,
    'rounded':false,
    'clockwise':true,
    'responsive':true,
    'duration':800,
    'animation':'easeInOutQuart',
    'animation-delay':100,
    'on-render':'showPreciseCurrent'
  },
                    {
    'name': 'G4',
    'id':10,
    'policy':'all',
    'round-progress':'', 
    'max':1132, 
    'current':193,
    'color':'#45BF55',
    'bgcolor':'#eaeaea',
    'radius':150,
    'stroke':75,
    'semi':false,
    'rounded':false,
    'clockwise':true,
    'responsive':true,
    'duration':800,
    'animation':'easeInOutQuart',
    'animation-delay':100,
    'on-render':'showPreciseCurrent'
  },
  ];

  return {
    all: function() {
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
})