/**
* Registers nagivation page translations on the translation provider
**/

export default function NavigationTranslations($translateProvider) {
	$translateProvider.translations('en', {
	    'NAVIGATION:LOGIN': 'Sign In',
	    'NAVIGATION:APPLICATIONNAME': 'APPLICATIONNAME',
	    'NAVIGATION:Dashboard': 'Dashboard',
        'NAVIGATION:CREATE_PROMOTION': 'Create Promotion',
        'NAVIGATION:WHO_AM_I': 'Who am I',
		'NAVIGATION:BUTTON_LANG_EN': 'English',
        'NAVIGATION:BUTTON_LANG_ES': 'Español',
		'NAVIGATION:BUTTON_SIGN_OUT': 'Sign Out'
	});
	$translateProvider.translations('es', {
	    'NAVIGATION:LOGIN': 'Registrarse',
		 'NAVIGATION:APPLICATIONNAME': 'VIVA ESPANIA APPLICATIONNAME',
        'NAVIGATION:Dashboard': 'Dashboard (es)',
		'NAVIGATION:CREATE_PROMOTION': 'Create Promotion (es)',
		'NAVIGATION:WHO_AM_I': 'Quién soy',
		'NAVIGATION:BUTTON_LANG_EN': 'English',
		'NAVIGATION:BUTTON_LANG_ES': 'Español',
		'NAVIGATION:BUTTON_SIGN_OUT': 'Desconectarse'
	});
};