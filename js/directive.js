var app=angular.module('myApp',[]);
app.directive('superman',function  () {
	return {
		restrict:"M",//
		link:function(){
			alert('I am working');
		}
	}
});