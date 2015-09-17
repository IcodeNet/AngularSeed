import _ from 'lodash-node/modern/lang/isEqual';
import $ from 'jquery';
import underscore from 'myname';

import angular from 'angular';
import ngNewRouter from 'angular-new-router';
import angularTranslate from 'angular-translate';
import oclazyload from 'oclazyload-systemjs-router';

import AppController from './app.controller';
import NavigationController from 'components/navigation/navigation.controller';
import NavigationTranslations from 'components/navigation/navigation.translations';
//import DashboardController from 'components/dashboard/dashboard.controller';
import SidebarController from 'components/sidebar/sidebar.controller';

import LoginController from 'components/login/login.controller';
import LoginTranslations from 'components/login/login.translations';

    export function bootstrap(appController) {
      // bootstrap code here
	    let getComponentTemplate;
		
		const templates = {};
		
		angular.module('app',['ngNewRouter', 'pascalprecht.translate',  'oc.lazyLoad' ]);
		
		angular.module('app')
		.config([ '$componentLoaderProvider', '$locationProvider', '$ocLazyLoadProvider', function (
			 $componentLoaderProvider, $locationProvider , $ocLazyLoadProvider) {

			//$locationProvider.html5Mode(true);

			$componentLoaderProvider.setTemplateMapping(function ( name ) {
				return getComponentTemplate(name);
			});
			
			 $ocLazyLoadProvider.config({
				debug: true,
				events: true,
				modules: [{
					name: 'app.dashboard',
					files: [
						 System.baseURL + '/components/dashboard/dashboard.module.js' 
					]
				}]
			});
						

		}]).run([ '$templateCache', '$ocLazyLoad', function ( $templateCache, $ocLazyLoad ) {

			getComponentTemplate = function ( name ) {
				var tplName =  System.baseURL + '/components/' + `${name}/${name}.html`;

				$templateCache.put(tplName, templates[name]);

				switch(name){
					case  'navigation' :
					case  'login' :
					case  'sidebar':
						// nothing is already loaded
						 break;
					default:
					$ocLazyLoad.load('app.' + name );
				   break;
				}	
 
				return tplName;
			};
		}]);
	
		
		angular.module('app')
			//.config(componentLoaderConfig)         
			.config(NavigationTranslations)    
			//.config(LoginTranslations)    
			.controller('NavigationController', NavigationController);
			//.controller('LoginController', LoginController);
			
		 angular.module('app')
		 		.controller('AppController', AppController); 
		 
	  		   
       angular.bootstrap(document.querySelector('[data-main-app]'), ['app']);
	  
	    console.log('Everything loaded...' + typeof AppController);
	  
    }
	
	
	function componentLoaderConfig($componentLoaderProvider) {
		$componentLoaderProvider.setTemplateMapping(function (name) {
			return System.baseURL + '/components/' + name + '/' + name + '.html';
		});
	}
	
	
