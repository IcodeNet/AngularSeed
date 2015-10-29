//import angular from 'angular';
 
var dashboardModule = angular.module('app.dashboard',	['oc.lazyLoad']);

dashboardModule.controller('DashboardController', function($ocLazyLoad, $compile) {
	
		// $ocLazyLoad.load('app.promotions').then(function() {
		// 		$compile(angular.element('body'))($scope);
		// });
			
	console.log(' Activated DashboardController!');
});

//export default dashboardModule;