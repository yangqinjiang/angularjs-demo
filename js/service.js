angular.module('myApp.services',['ngResource']).factory('githubService', ['$http', function($http){
	var doRequest = function(username,path){
		return $http({
			method:'JSONP',
			url:'https//api.github.com/users/'+username+'/'+path+'?callback=JSON_CALLBACK'
		});
	}
	return {
		events:function(username){return doRequest(username,'events');},
	};
}]);

//添加服务到controller中
//建立一个controller,并加载(注入)githubService作为运行时依赖,
//我们把service的名字作为参数传递给controller 函数（使用中括号[])
var app= angular.module('myApp',['myApp.services']);
app.controller('ServiceController', ['$scope','githubService', function($scope,githubService){
	//do it...	
	// alert(1);
	githubService.events('yangqinjiang');
}]);