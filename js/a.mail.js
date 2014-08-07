var aMailServices = angular.module('AMail',['ngRoute']);
//
function emailRouteConfig ($routeProvider) {
	$routeProvider.when('/',{controller:ListController,templateUrl:'list.html'}).
	when('/view/:id',{
		controller:DetailController,templateUrl:'detail.html'
	}).otherwise({redirectTo:'/'});	
};
aMailServices.config(emailRouteConfig);
//Some fak emails
var messages =[
{id:0,sender:'jean@somecompany.com',subject:'Hi there,old friend',date:'Dec 7,2013 12:32:00',recipients:['greg@somecompany.com'],message:'Hey ,we should get together for lunch sometime and catch up...'},
{id:1,sender:'maria@somecompany.com',subject:'Where did you leave my laptop?',date:'Dec 7,2013 12:32:00',recipients:['greg@somecompany.com'],message:'Hey ,we should get together for lunch sometime and catch up...'},
{id:2,sender:'bill@somecompany.com',subject:'Lost python',date:'Dec 7,2013 12:32:00',recipients:['greg@somecompany.com'],message:'Hey ,we should get together for lunch sometime and catch up...'}
];
//publish our message for the list template
function ListController($scope){
	
	$scope.messages= messages;
}
function DetailController($scope,$routeParams){

	$scope.message = messages[$routeParams.id];
}
