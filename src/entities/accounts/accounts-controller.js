const {Story} = require('story-system');
const {getAccountsSchema, createAccountSchema, modifyAccountSchema} = require('./schemas.js');
const {AccountsService} = require('./accounts-service');
const config = require('../../../config');

class AccountsController {
    constructor() {
        this.accountsService = new AccountsService();
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
                domain: 'Accounts',
                event: 'AccountModified',
                params: modifiedData,
                token: await Story.token.generateToken({}, config.token),
            },
            options: config.rmq.publish.exchanges.account,
        });

        return modifiedData;
    }
}

module.exports = {AccountsController};
