var myApp = angular.module('spicyApp2', []);

myApp.controller('SpicyCtrl', ['$scope', function($scope){
    $scope.customSpice = "wasabi";//初始值在 scope 中设置为了 'wasabi'
    $scope.spice = 'very';
    
    $scope.spicy = function(spice){
    	console.log(spice);
        $scope.spice = spice;
    };
}]);