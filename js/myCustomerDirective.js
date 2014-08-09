angular.module('docsSimpleDirective',[]).controller('Ctrl', ['$scope', function($scope){
	$scope.customer={name:'Naomi',address:'1600 Amphitheatre'+new Date()};

	$scope.products =[
	{
		name: '小米1'
	}, {
		name: '小米1s'
	}, {
		name: '小米2'
	}, {
		name: '小米2a'
	}, {
		name: '小米3'
	}, {
		name: '小米4'
	}
	];

}]).directive('myCustomer',function  () {
	return {
		template:'姓名:{{customer.name}}|地址:{{customer.address}}'
	};
}).directive('myCustomerTemplateUrl',function  () {
	return {
		templateUrl:'my-customer.html'
	};
}).directive('myCustomerElement',function  () {
	return {
		restrict:'E',//仅匹配元素名
		templateUrl:'my-customer.html'
	};
}).directive('products',function  () {
	return {
		restrict:'E',
		templateUrl:'product_list.html'
	};
});