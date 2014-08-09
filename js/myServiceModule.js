angular.module('myServiceModule', []).
controller('MyController', ['$scope', 'notify',
	function($scope, notify) {
		$scope.callNotify = function(msg) {
			notify(msg); //call service notify
		};
	}
]).factory('notify', ['$window',
	function($window) {
		var msgs = [];
		return function(msg) {
			msgs.push(msg);
			if (msgs.length == 4) {
				$window.alert(msgs.join("\n"));
				msgs = [];
			}
		};
	}
]).factory('batchLog', ['$interval','$log', function($interval,$log){//The batchLog service depends on the built-in $interval and $log services.
	var messageQueue=[];
	function log () {
		if(messageQueue.length){
			$log.log('batchLog messages:',messageQueue);
			messageQueue=[];
		}
	};

	$interval(log,50000);

	return function(message){
		messageQueue.push(message);
	};
}]).factory('routeTemplateMonitor', ['$route','batchLog','$rootScope',//The routeTemplateMonitor service depends on the built-in $route service and our custom batchLog service
 //顺序
 function($route,batchLog,$rootScope){
 	//$routeChangeSuccess事件
 	$rootScope.$on('$routeChangeSuccess',function  () {
 		batchLog($route.current?$route.current.template:null);
 	});
}]).config(['$provide',function($provide) {
	$provide.factory('serviceId',function  () {
		var shinyNewServiceInstance ={};
		return shinyNewServiceInstance;
	});
}]);