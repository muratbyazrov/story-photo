const {System} = require('story-system');
const {getAccountsSchema, createAccountSchema, modifyAccountsSchema} = require('./schemas.js');
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

    modifyAccounts(data) {
        System.validator.validate(data, modifyAccountsSchema);
        return this.accountsService.modifyAccounts(data);
    }
}

module.exports = {AccountsController};
