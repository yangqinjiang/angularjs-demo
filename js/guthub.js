var existingRecipeObj = {id:'1','title':'Cookies','description':'Delicious,crisp one the outside.chewy on the outside,oozing with chocolatey goodness Cookies.the best kind.',ingredients:[{amount:'1',amountUnits:'packet',ingredientName:'Chips Ahoy'}],instructions:'1.Go buy a packet of Chips Ahoy\n2.Heat it up in an oven\n3,....\n4...'};
var services = angular.module('guthub.services',['ngResource']);

services.factory('Recipe', ['$resource', function($resource){
	return $resource('/recipes/:id', {id:'@id'});
}]);
services.factory('MultiRecipeLoader', ['Recipe','$q', function(Recipe,$q){
	return function(){
		var delay = $q.defer();
		Recipe.query(function(recipes){
			delay.resolve(recipes);
		},function(){
			delay.reject('Unable to fetch recipes');
		});
		return delay.promise;
	};
}]);

services.factory('RecipeLoader', ['Recipe','$route','$q', function(Recipe,$route,$q){
	return function(){
		var delay = $q.defer();
		Recipe.get({id:$route.current.params.recipeId},function(recipe){
			delay.resolve(recipe);
		},function(){
			delay.reject('Unable to fetch recipe '+$route.current.params.recipeId);
		});
		return delay.promise;
	};
}])