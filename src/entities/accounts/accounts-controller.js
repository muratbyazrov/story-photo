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
const config = require('../../../config');

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

        return {token: await Story.token.generateToken(account, config.token)};
    }

    getAccounts(data) {
        Story.validator.validate(data, getAccountsSchema);
        return this.accountsService.getAccounts(data);
    }

    createAccount(data) {
        Story.validator.validate(data, createAccountSchema);
        return this.accountsService.createAccount(data);
    }

    async modifyAccount(data) {
        Story.validator.validate(data, modifyAccountSchema);
        const [modifiedData] = await this.accountsService.modifyAccount(data);
        await Story.rmqAdapter.publish({
            message: {
                domain: 'accounts',
                event: 'accountModified',
                params: modifiedData,
                token: await Story.token.generateToken({}, config.token),
            },
            options: config.rmq.publish.exchanges.account,
        });

        return modifiedData;
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
