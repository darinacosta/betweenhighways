
var app = angular.module("app", ["ngRoute", "ngSanitize"])

.config(function ($routeProvider) {
  $routeProvider
  .when("/", {
      controller: 'homeCtrl',
      controllerUrl: 'components/home/homeCtrl',
      templateUrl: 'components/home/home.html'
  })
   .when("/norcofarawaylights", {
      templateUrl: 'components/norcofarawaylights/norcofarawaylights.html',
      controller: 'homeCtrl',
      controllerUrl: 'components/home/homeCtrl'
  })
  .when("/swampstar", {
     templateUrl: 'components/swampstar/swampstar.html',
     controller: 'homeCtrl',
     controllerUrl: 'components/home/homeCtrl'
  })
  .when("/germancoast", {
    templateUrl: 'components/germancoast/germancoast.html',
    controller: 'homeCtrl',
    controllerUrl: 'components/home/homeCtrl'
  })
  .when("/endmillennium", {
    templateUrl: 'components/endmillennium/endmillennium.html',
    controller: 'homeCtrl',
    controllerUrl: 'components/home/homeCtrl'
  })
  .otherwise({redirectTo: "/"});
});
