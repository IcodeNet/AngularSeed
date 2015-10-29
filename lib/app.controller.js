
class AppController {
  constructor($router) {
	   console.log('constructing AppController');
	   
		 
		}
		
		
		
} 

// The default behavior is to dasherize and serve from ./components. 
// A component called navigation uses a controller named NavigationController and a template loaded from ./components/navigation/navigation.html.
AppController.$inject = ['$router'];
AppController.$routeConfig = [			 
				{ path: '/', components: { header: 'navigation' , sidebar :  'sidebar', main: 'dashboard'},  as: 'main:home' },
				{ path: '/login', components: { header: 'navigation', sidebar :  'sidebar',  main: 'login' }, as: 'main:login' },
				{ path: '/dashboard', components: { header: 'navigation', sidebar :  'sidebar',  main: 'dashboard' }, as: 'main:dashboard' },
				
			   ];   

export default AppController;