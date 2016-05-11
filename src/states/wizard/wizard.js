export class WizardController {

    /* @ngInject */
    constructor(Portfolios, $localStorage) {

        this.$localStorage = $localStorage;
        this.Portfolios = Portfolios;

        this.items = [
            {title: '1. Account goal', templateUrl: "./templates/account-goal.html"},
            {title: '2. Deposits', templateUrl: './templates/deposits.html'},
            {title: '3. Risk appetite', templateUrl: './templates/risk-appetite.html'},
            {title: '4. Preferred sectors', templateUrl: './templates/preferred-sectors.html'}
        ];
    }

    /**
     * Get updated portfolio on any question change
     * @returns {*}
     */
    onSelectionChange() {
        
        const model = this.$localStorage.wizardSelection;
        return this.Portfolios.get(model);
    }
}
