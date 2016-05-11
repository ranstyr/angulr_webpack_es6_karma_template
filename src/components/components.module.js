import {siInvestmentInfo}     from './investment-info/investment-info';
import {siAccordionItem}      from './accordion/accordion-item';
import {siAccordion}          from './accordion/accordion';
import {siHeader}             from './header/header';
import {siBoxes}              from './boxes/boxes';

import loader from './loader/loader.module';

export default angular.module('si.components', [
        loader.name
    ])
    .directive({
        siAccordionItem,
        siInvestmentInfo,
        siAccordion,
        siHeader,
        siBoxes
    });