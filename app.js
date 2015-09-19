
var app = angular.module("app", ["ngRoute", "ngSanitize"])

.config(function ($routeProvider) {
  $routeProvider
  .when("/", {
      controller: 'homeCtrl', 
      controllerUrl: 'components/home/homeCtrl',
      templateUrl: 'components/home/home.html'
  })
  .otherwise({redirectTo: "/"});
});








