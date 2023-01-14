const {System} = require('story-system');
const {
    getAccountsSchema,
    createAccountSchema,
    modifyAccountSchema,
    getInterestCategoriesSchema,
    getInterestsSchema,
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

    getInterestCategories(data) {
        System.validator.validate(data, getInterestCategoriesSchema);
        return this.accountsService.getInterestCategories(data);
    }

    getInterests(data) {
        System.validator.validate(data, getInterestsSchema);
        return this.accountsService.getInterests(data);
    }
}

module.exports = {AccountsController};
