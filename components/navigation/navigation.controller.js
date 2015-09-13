

class NavigationController {

    
    constructor($translate) {
        this.$translate = $translate;        
		 this.$translate.use('en');
    }
	
	
	  changeLanguage(key) {
             this.$translate.use(key);
    }
	
	 get imagesPath() {
        return window.Zeus.ConfigurationData.appBase + 'images';
    }
 
}

NavigationController.$inject = ['$translate'];

export default NavigationController;