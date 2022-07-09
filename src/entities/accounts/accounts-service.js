const {System} = require('story-system');
const {getAccounts, createAccount, modifyAccount} = require('./queries.js');

class AccountsService {
    getAccounts(data) {
        return System.dbAdapter.execQuery({
            queryName: getAccounts,
            params: data.params,
        });
    }

    createAccount(data) {
        return System.dbAdapter.execQuery({
            queryName: createAccount,
            params: data.params,
        });
    }

    modifyAccount(data) {
        return System.dbAdapter.execQuery({
            queryName: modifyAccount,
            params: data.params,
        });
    }
}

module.exports = {AccountsService};
