var app=angular.module('myApp',[]);
app.directive('superman',function  () {
	return {
		restrict:"C",//
		link:function(){
			alert('I am working');
		}
	}
});