angular.module('docsTimeDirective',[])
.controller('Ctrl', ['$scope', function($scope){
	$scope.format='M/d/yy h:mm:ss a';
}])
.directive('myCurrentTime',function  ($timeout,dateFilter) {
	function link (scope,element,attrs) {
		var format,timeoutId;
		function updateTime () {
			element.text(dateFilter(new Date(),format));
		}
		scope.$watch(attrs.myCurrentTime,function  (value) {
			format=value;
			updateTime();
		});
		function scheduleUpdate () {
			//save the timeoutId for canceing
			timeoutId = $timeout(function  () {
				updateTime();//update dom
				scheduleUpdate();//schedule the next update
			},1000);
		}
		//指令应该自己管理自身分配的内存。当指令被移除时， 
		//你可以使用element.on('$destroy', ...) 或 scope.$on('$destroy', ...)来执行一个清理的工作
		element.on('$destroy',function  () {
			$timeout.cancel(timeoutId);
		});

		//start the up update process
		scheduleUpdate();
	}

	return {
		link:link
	};
});