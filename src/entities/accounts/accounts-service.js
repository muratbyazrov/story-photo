const {System} = require('story-system');
const {
    getAccounts, createAccount, modifyAccount, getInterests, getInterestsCategories, setAccountInterests,
} = require('./queries.js');

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

    getInterests(data) {
        return System.dbAdapter.execQuery({
            queryName: getInterests,
            params: data.params,
        });
    }

    getInterestsCategories(data) {
        return System.dbAdapter.execQuery({
            queryName: getInterestsCategories,
            params: data.params,
        });
    }

    setAccountInterests(data) {
        return System.dbAdapter.execQuery({
            queryName: setAccountInterests,
            params: data.params,
        });
    }
}

module.exports = {AccountsService};
