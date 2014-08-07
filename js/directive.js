var app=angular.module('myApp',[]);
app.directive('superman',function  () {
	return {
		restrict:"A",//
		link:function(){
			alert('I am working');
		}
	}
});