class DashboardController {

    constructor (authenticationService) {
        this.authenticationService = authenticationService;
    }

    /**
     * Determines if the URL action can be activated.  The service checks if the user is logged in, and if they are not, then they're redirected to the login screen
     * @returns {} If authenticated true, otherwise false
     */
    canActivate() {
        return this.authenticationService.isCurrentUserLoggedIn({redirect: true});
    }
}
DashboardController.$inject = ['AuthenticationService'];

export default DashboardController;