export class GroupAttributes {

  /* @ngInject */
  constructor ($q, Network, UserData, API_URLS, PRODUCT_ID) {

    this.$q         = $q;

    this.Network    = Network;
    this.UserData   = UserData;
    this.API_URLS   = API_URLS;
    this.PRODUCT_ID = PRODUCT_ID;

    // Paths
    this.getGroupAttributesPath         = 'GroupAttributes/GetGroupAttributes';
    this.getGroupAttributesPreLoginPath = 'GroupAttributes/GetGroupAttributesPreLogin';

    this.preLogin          = {};
    this.postLogin         = {};
    this.sidebarAttributes = {};

    this.preLoginGroupID  = null;
    this.preLoginBrokerID = null;
  }

  getGroupAttributesPreLogin() {
    const query = {
      BrokerURL: this.API_URLS.BROKER,
      ProductID: this.PRODUCT_ID
    };

    return this.Network.post(this.getGroupAttributesPreLoginPath, query)
      .then(attributes => {
        // Reset `preLogin` and fill with the new data
        angular.copy(attributes.GroupAttributes, this.preLogin);

        this.preLoginGroupID  = attributes.GroupID;
        this.preLoginBrokerID = attributes.BrokerID;

        let brokerCurrency = this.preLogin.WIZARD_CURRENCY.AttributeValue;
        let balanceProps   = this.preLogin.STARTING_BALANCE_PROPERTIES.AttributeValue;

        // Reset `sidebarAttributes` and fill with the new data
        angular.copy(balanceProps[brokerCurrency], this.sidebarAttributes);

        return this.preLogin;
      });
  }

  getGroupAttributes() {
    const userData = this.UserData.getActiveUser();

    if (!userData) {
      return this.$q.reject();
    }

    const query = {
      GroupID: userData.Accounts[0].GroupID,
      BrokerID: userData.BrokerID,
      ProductID: this.PRODUCT_ID
    };

    return this.Network.post(this.getGroupAttributesPath, query)
      .then(attributes => {
        // Reset `postLogin` and fill with the new data
        angular.copy(attributes, this.postLogin);

        let brokerCurrency = this.postLogin.GroupAttributes.WIZARD_CURRENCY.AttributeValue;
        let balanceProps   = this.postLogin.GroupAttributes.STARTING_BALANCE_PROPERTIES.AttributeValue;

        // Reset `sidebarAttributes` and fill with the new data
        angular.copy(balanceProps[brokerCurrency], this.sidebarAttributes);

        return attributes;
      });
  }

  getLangList() {
    if (!_.isEmpty(this.postLogin)) {
      return this.postLogin.GroupAttributes.BROKER_LANGUAGES.AttributeValue;
    }

    if (!_.isEmpty(this.preLogin)) {
      return this.preLogin.BROKER_LANGUAGES.AttributeValue;
    }

    return {};
  }

  getDefaultLang() {
      if (!_.isEmpty(this.postLogin)) {
          return this.postLogin.GroupAttributes.DEFAULT_LANGUAGE.AttributeValue;
      }

      if (!_.isEmpty(this.preLogin)) {
          return this.preLogin.DEFAULT_LANGUAGE.AttributeValue;
      }

      return {};
  }

  getSupportList() {
      // Return all support attributes after filtering the irrelevant
      if (!_.isEmpty(this.postLogin)) {
          const fullSupportList = this.postLogin.GroupAttributes.CONTACT_SUPPORT.AttributeValue;
          return _.filter(fullSupportList, supportItem =>{
              return supportItem.displayname !== "";
          });
      }

      if (!_.isEmpty(this.preLogin)) {
          const fullSupportList =  this.preLogin.CONTACT_SUPPORT.AttributeValue;
          return _.filter(fullSupportList, supportItem =>{
              return supportItem.displayname !== "";
          });
      }

      return {};
  }

  getWizard2Defaults(){
      if (!_.isEmpty(this.postLogin)) {
          return this.postLogin.GroupAttributes.WIZARD2_DEFAULTS.AttributeValue;
      }

      if (!_.isEmpty(this.preLogin)) {
          return this.preLogin.WIZARD2_DEFAULTS.AttributeValue;
      }

      return {};
  }

  getSidebarAttributes() {
    return this.sidebarAttributes;
  }
}
