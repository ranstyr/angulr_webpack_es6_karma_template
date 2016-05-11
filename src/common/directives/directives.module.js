import {siToggleCurrency} from './toggle-currency'
import { ngMin }          from './ng-min';
import { ngMax }          from './ng-max';

export default angular.module('si.directives', [])
    .directive({
        siToggleCurrency,
        ngMin,
        ngMax
    })