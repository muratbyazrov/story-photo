const {System} = require('story-system');
const {getAccounts, createAccount, modifyAccounts} = require('./queries.js');

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

    modifyAccounts(data) {
        console.log(data);
        return System.dbAdapter.execQuery({
            queryName: modifyAccounts,
            params: data.params,
        });
    }
}

module.exports = {AccountsService};
