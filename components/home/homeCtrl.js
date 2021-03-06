app.controller('homeCtrl', ['$scope', '$http', homeCtrl]);

function homeCtrl($scope, $http) {
  
  $http.get('assets/data/airline.json').
  success(function(data, status, headers, config) {
    console.log(data);
    $scope.about = data.about;
    $scope.sources = data.sources;
    $scope.contact = data.contact;
  })

  $scope.computeCssClass = function(last){
  	if (last){ 
  		return "hide";
    } else {
    	return "gallery-hr";
    }
  };

}
