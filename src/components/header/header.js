import template from './header.html';

class HeaderController {

  /* @ngInject */
  constructor() {

  }
}

export function siHeader() {
  return {
    restrict: 'E',
    template: template,
    replace: true,
    scope: {},
    bindToController: {

    },
    controller: HeaderController,
    controllerAs: 'Header'
  };
}
