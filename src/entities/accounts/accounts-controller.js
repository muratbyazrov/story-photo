const {Story} = require('story-system');
const {
    getAccountsSchema,
    createAccountSchema,
    modifyAccountSchema,
    getInterestCategoriesSchema,
    getInterestsSchema,
} = require('./schemas.js');
const {AccountsService} = require('./accounts-service');
const {token} = require('../../../config');

class AccountsController {
    constructor() {
        this.accountsService = new AccountsService();
    }

    getAccounts(data) {
        Story.validator.validate(data, getAccountsSchema);
        const test = Story.token.generateToken({token}, data);
        console.log(2222222222, test);
        return this.accountsService.getAccounts(data);
    }

    createAccount(data) {
        Story.validator.validate(data, createAccountSchema);
        return this.accountsService.createAccount(data);
    }

    modifyAccount(data) {
        Story.validator.validate(data, modifyAccountSchema);
        return this.accountsService.modifyAccount(data);
    }

    getInterestCategories(data) {
        Story.validator.validate(data, getInterestCategoriesSchema);
        return this.accountsService.getInterestCategories(data);
    }

    getInterests(data) {
        Story.validator.validate(data, getInterestsSchema);
        return this.accountsService.getInterests(data);
    }
}

module.exports = {AccountsController};
