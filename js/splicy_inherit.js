var myApp = angular.module('scopeInheritance',[]);
myApp.controller('MainCtrl', ['$scope', function($scope){
	//MainCtrl 控制器管理的 scope （简称 MainCtrl scope），拥有 timeOfDay 和 name 两个属性
	$scope.timeOfDay='morning';
	$scope.name='Nikki';
}]);
myApp.controller('ChildCtrl', ['$scope', function($scope){
	//ChildCtrl 控制器管理的 scope （简称 ChildCtrl scope），继承了 MainCtrl scope 中的 timeOfDay 属性，但重写了它的 name 属性
	$scope.name='Mattie';
}]);
myApp.controller('GrandChildCtrl', ['$scope', function($scope){
	//GrandChildCtrl 控制器管理的 scope （简称 GrandChildCtrl scope），重写了 MainCtrl scope 中的 timeOfDay 属性和 ChildCtrl scope 中的 name 属性
	$scope.timeOfDay='evening';
	$scope.name='Gingerbreak Baby';
}]);