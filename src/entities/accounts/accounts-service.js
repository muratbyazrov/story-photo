const {Story} = require('story-system');
const {getAccounts, createAccount, modifyAccount} = require('./queries.js');

class AccountsService {
    getAccounts(data) {
        return Story.dbAdapter.execQuery({
            queryName: getAccounts,
            params: data.params,
        });
    }

    createAccount(data) {
        return Story.dbAdapter.execQuery({
            queryName: createAccount,
            params: data.params,
        });
    }

    modifyAccount(data) {
        return Story.dbAdapter.execQuery({
            queryName: modifyAccount,
            params: data.params,
        });
    }
}

module.exports = {AccountsService};
