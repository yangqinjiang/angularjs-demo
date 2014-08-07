var myApp = angular.module('myApp',[]);
myApp.factory('Avengers',function  () {
	var Avengers={};
	Avengers.cast=[
		{name:'Pault Bettany',character:'Jarvis(voice)'},
		{name:'Alexis Denisof',character:'The other'},
		{name:'Cobie Smulders',character:'Jarvis(voice)'},
		{name:'Samuel L. Jackson',character:'Jarvis(voice)'},
		{name:'Tina Benko',character:'Jarvis(voice)'}
	];
	return Avengers;
});

function AvengersCtrl($scope,Avengers){
	$scope.avengers = Avengers;
}