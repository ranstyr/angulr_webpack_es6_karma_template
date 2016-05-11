import { WizardController }             from './wizard';
import wizardTemplate                   from './wizard.html';


/* @ngInject */
function wizardRoutes($stateProvider) {
  $stateProvider
    .state('home.wizard', {
      url: '/wizard',
      template: wizardTemplate,
      controller: 'WizardController',
      controllerAs: 'Wizard',
      resolve: {}
    });
}

export default angular.module('states.wizard', [])
  .controller('WizardController', WizardController)
  .config(wizardRoutes);
