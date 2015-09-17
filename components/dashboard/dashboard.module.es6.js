import angular from 'angular';
 
var dashboardModule = angular.module('app.dashboard',	[]);

dashboardModule.controller('DashboardController', function() {
	console.log('DashboardController!');
});

export default dashboardModule;