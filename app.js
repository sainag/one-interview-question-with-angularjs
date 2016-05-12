var app=angular.module("1Q",[]);
app.controller("1QCtrl",function($scope,$filter){
  $scope.countryArray=["Australia","India"];
  $scope.cityArray=[{"name":"Melbourne","cID":0},{"name":"Sydney","cID":0},{"name":"Karimnagar","cID":1},{"name":"Hyderabad","cID":1}];
  $scope.addToWorld=function(){
    if($scope.countryArray.indexOf($scope.country)==-1){
	  $scope.countryArray.push($scope.country);
	  $scope.cityArray.push({"name":$scope.city,"cID":$scope.countryArray.indexOf($scope.country)});	
	}
	else {
	  var country_city=$filter('filter')($scope.cityArray,{name:$scope.city, cID: $scope.countryArray.indexOf($scope.country)});
	  if(country_city.length==0){
	    $scope.cityArray.push({"name":$scope.city,"cID":$scope.countryArray.indexOf($scope.country)});	
	  }
	}
  };
});