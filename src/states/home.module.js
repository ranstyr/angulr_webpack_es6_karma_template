import { HomeController } from './home';
import homeTemplate       from './home.html';
import wizard             from './wizard/wizard.module';


/* @ngInject */
function appRoutes($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            abstract: true,
            template: homeTemplate,
            controller: 'HomeController',
            controllerAs: 'Home'
        });

    $urlRouterProvider.otherwise('/wizard');
}

export default angular.module('tradency.app', [
        wizard.name
])
    .controller({HomeController})
    .config(appRoutes)