
class LoginController {


    constructor ($rootScope, $router, $translate) {
        this.$rootScope = $rootScope;
        this.rootRouter = this._findRootRouter($router);
        this.$translate = $translate;     
		this.$translate.use('en');		
    }


    login() {
        window.alert('atempt to login');
        if (this.loginForm.$valid) {
           
        }
    }

  
    shouldErrorsBeShown() {
        return this.loginStatus && this.loginStatus !== 'SUCCESSFUL';
    }


    activate($scope) {
        this.loginForm = $scope.loginForm; // Had to do this due to a bug in the new angular router where the "controller as" syntax for forms is not hooked up properly
        return true;
    }


    _findRootRouter($router) {
        return $router.parent === null ? $router : this._findRootRouter($router.parent);
    }
}
LoginController.$inject = ['$rootScope', '$router' , '$translate'] ;

export default LoginController;