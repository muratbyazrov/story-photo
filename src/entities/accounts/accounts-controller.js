const {System} = require('story-system');
const {getAccountsSchema, createAccountSchema} = require('./schemas.js');
const {AccountsService} = require('./accounts-service');

class AccountsController {
    constructor() {
        this.usersService = new AccountsService();
    }

    getAccounts(data) {
        System.validator.validate(data, getAccountsSchema);
        return this.usersService.getAccounts(data);
    }

    createAccount(data) {
        System.validator.validate(data, createAccountSchema);
        return this.usersService.createAccount(data);
    }
}

module.exports = {AccountsController};
