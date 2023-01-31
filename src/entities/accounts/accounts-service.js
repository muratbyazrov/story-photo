const {Story} = require('story-system');
const {
    getAccounts,
    createAccount,
    modifyAccount,
    getInterestCategories,
    getInterests,
} = require('./queries.js');

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

    getInterestCategories(data) {
        return Story.dbAdapter.execQuery({
            queryName: getInterestCategories,
            params: data.params,
        });
    }

    getInterests(data) {
        return Story.dbAdapter.execQuery({
            queryName: getInterests,
            params: data.params,
        });
    }
}

module.exports = {AccountsService};
