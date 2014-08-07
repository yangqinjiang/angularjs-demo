var bookStoreApp=angular.module('bookStoreApp',['ngRoute','ngAnimate',
		'bookStoreCtrls','bookStoreFilters','bookStoreServices',
		'bookStoreDirectives']);
//依赖项 注入['ngRoute','ngAnimate',
		//'bookStoreCtrls','bookStoreFilters','bookStoreServices',
		//'bookStoreDirectives']

// 模块之间的依赖这样做:依赖注入

bookStoreApp.config(function  ($routeProvider) {
	// 路由

	$routeProvider.when('/hello',{// #/hello
		templateUrl:'tpls/hello.html',
		controller:'HelloCtrl'
	}).when('/list',{// #/list
		templateUrl:'tpls/bookList.html',
		controller:'BookListCtrl'
	}).otherwise({// #/其他url,跳转到#/hello
		redirectTo:'/hello'
	});
});