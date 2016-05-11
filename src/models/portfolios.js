export class Portfolios {

    /* @ngInject */
    constructor(Network) {
        this.Network = Network;

        // Paths
        this.portfoliosPath = 'Portfolios';
        // this.packagesPerformance = 'WizardPackages/GetWizardPackagesPerformance';
        // this.extendedPackagesPath = 'WizardPackageInfo/GetPackageExInfo';

        this.portfolios = {};
    }

    // RegisterToken(packageQuery) {
    //     return this.Network.post(this.packagesPath, packageQuery)
    //         .then(wizardPackages => {
    //             this.ColorService.addUnusedColorToPackages(wizardPackages.WizardPackages);
    //
    //             angular.copy(wizardPackages, this.packages);
    //
    //             return wizardPackages;
    //         });
    // }

    get(query) {
        return this.Network.get(this.portfoliosPath, query)
            .then(portfolios => {

                angular.copy(portfolios, this.portfolios);

                return portfolios;
            });
    }

    //
    // getWizardPackagesExtendedInfo(packageQuery) {
    //     return this.Network.post(this.extendedPackagesPath, packageQuery);
    // }
    //
    // getWizardPackagesPerformance(packageQuery) {
    //     return this.Network.post(this.packagesPerformance, packageQuery)
    //         .then(wizardPackages => {
    //             // Reset `packages` and fill with the new data
    //             angular.copy(wizardPackages, this.packages);
    //
    //             return wizardPackages;
    //         });
    // }
}
