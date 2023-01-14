const {System} = require('story-system');
const {getAccountsSchema, createAccountSchema, modifyAccountSchema} = require('./schemas.js');
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

    getGoals(data) {
        System.validator.validate(data, getGoalsSchema);
        return this.accountsService.getGoals(data);
    }

    getInterestCategories(data) {
        System.validator.validate(data, getInterestCategoriesSchema);
        return this.accountsService.getInterestCategories(data);
    }

    getAccountInterests(data) {
        System.validator.validate(data, getAccountInterestsSchema);
        return this.accountsService.getAccountInterests(data);
    }
}

module.exports = {AccountsController};
