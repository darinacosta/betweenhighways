
var app = angular.module("app", ["ngRoute", "ngSanitize"])

.config(function ($routeProvider) {
  $routeProvider
  .when("/", {
      controller: 'homeCtrl', 
      controllerUrl: 'components/home/homeCtrl',
      templateUrl: 'components/home/home.html'
  })
   .when("/game", {
      //controller: 'homeCtrl', 
      //controllerUrl: 'components/home/homeCtrl',
      templateUrl: 'components/game/game.html'
  })
  .when("/germancoast", {
    //controller: 'homeCtrl', 
    //controllerUrl: 'components/home/homeCtrl',
    templateUrl: 'components/germancoast/germancoast.html'
  })
  .otherwise({redirectTo: "/"});
});








