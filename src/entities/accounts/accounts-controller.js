const {Story} = require('story-system');
const {
    getAccountsSchema,
    createAccountSchema,
    modifyAccountSchema,
    getInterestCategoriesSchema,
    getInterestsSchema,
    signInSchema,
} = require('./schemas.js');
const {AccountsService} = require('./accounts-service');
const {token, rmq: {publishDomains}} = require('../../../config');

class AccountsController {
    constructor() {
        this.accountsService = new AccountsService();
    }

    async signIn(data) {
        Story.validator.validate(data, signInSchema);
        const [account] = await this.accountsService.getAccounts(data);
        if (!account) {
            throw new Story.errors.Forbidden('Нет такого аккаунта');
        }

        await Story.rmqAdapter.publish('hi', publishDomains.account);

        return {token: await Story.token.generateToken(account, {token})};
    }

    getAccounts(data) {
        Story.validator.validate(data, getAccountsSchema);
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
