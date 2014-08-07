function PhoneListCtrl($scope,$http) {//手机的数据此时与注入到我们控制器函数的作用域（$scope）相关联
	// $scope.phones = [{
	// 	'name': 'Nexus S',
	// 	'snippet': 'Fast just got faster with Nexus S.','age':0
	// }, {
	// 	'name': 'Motorola XOOM™ with Wi-Fi',
	// 	'snippet': 'The Next, Next Generation tablet.','age':2
	// }, {
	// 	'name':'MOTOROLA XOOM™',
	// 	'snippet':'The Next, Next Generation tablet.','age':1
	// }
	// ];
	$http.get('js/phones.json').success(function(data){
		$scope.phones = data;
	});
	$scope.orderProp = 'age';//默认orderProp值
	$scope.app_name='AngularJs';
}