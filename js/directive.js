var app=angular.module('myApp',[]);
app.directive('superman',function  () {
	return {
		restrict:"E",//元素
		template:"<div>Here I am to save the day.</div>"
	}
});