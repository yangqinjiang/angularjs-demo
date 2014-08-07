var myApp=angular.module('myApp',[]);
myApp.controller('DoubleCtrl', ['$scope', function($scope){
	$scope.double=function(value){return value*2;};
}]);