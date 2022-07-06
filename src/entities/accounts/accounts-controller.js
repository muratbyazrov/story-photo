const {System} = require('story-system');
const {
    getAccountsSchema, createAccountSchema, modifyAccountSchema, getInterestsSchema, getInterestsCategoriesSchema,
    setAccountInterestsSchema,
} = require('./schemas.js');
const {AccountsService} = require('./accounts-service');

class AccountsController {
    constructor() {
        this.accountsService = new AccountsService();
    }

    getAccounts(data) {
        System.validator.validate(data, getAccountsSchema);
        return this.accountsService.getAccounts(data);
    }

    createAccount(data) {
        System.validator.validate(data, createAccountSchema);
        return this.accountsService.createAccount(data);
    }

    modifyAccount(data) {
        System.validator.validate(data, modifyAccountSchema);
        return this.accountsService.modifyAccount(data);
    }

    getInterests(data) {
        System.validator.validate(data, getInterestsSchema);
        return this.accountsService.getInterests(data);
    }

    getInterestsCategories(data) {
        System.validator.validate(data, getInterestsCategoriesSchema);
        return this.accountsService.getInterestsCategories(data);
    }

    setAccountInterests(data) {
        System.validator.validate(data, setAccountInterestsSchema);
        return this.accountsService.setAccountInterests(data);
    }
}

module.exports = {AccountsController};
