
var app = angular.module("app", ["ngRoute", "ngSanitize"])

.config(function ($routeProvider) {
  $routeProvider
  .when("/", {
      controller: 'homeCtrl', 
      controllerUrl: 'components/home/homeCtrl',
      templateUrl: 'components/home/home.html'
  })
   .when("/game", {
      templateUrl: 'components/game/game.html'
  })
  .when("/germancoast", {
    templateUrl: 'components/germancoast/germancoast.html'
  })
  .when("/endmillennium", {
    templateUrl: 'components/endmillennium/endmillennium.html'
  })
  .otherwise({redirectTo: "/"});
});








