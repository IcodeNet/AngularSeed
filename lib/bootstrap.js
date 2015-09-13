import _ from 'lodash-node/modern/lang/isEqual';
import $ from 'jquery';
import underscore from 'myname';

import angular from 'angular';
import ngNewRouter from 'angular-new-router';
import angularTranslate from 'angular-translate';

import AppController from './app.controller';
import NavigationController from 'components/navigation/navigation.controller';
import NavigationTranslations from 'components/navigation/navigation.translations';
import DashboardController from 'components/dashboard/dashboard.controller';
import SidebarController from 'components/dashboard/dashboard.controller';
import LoginController from 'components/login/login.controller';
import LoginTranslations from 'components/login/login.translations';

    export function bootstrap(appController) {
      // bootstrap code here
	    angular.module('app',['ngNewRouter', 'pascalprecht.translate' ]);
		
		angular.module('app')
			.config(componentLoaderConfig)         
			.config(NavigationTranslations)    
			.config(LoginTranslations)    
			.controller('NavigationController', NavigationController)
			.controller('LoginController', LoginController);
			
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
