const {System} = require('story-system');
const {getInterests, getInterestsCategories, setAccountInterests, deleteAccountInterests} = require('./queries.js');

class InterestsService {
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

    async setAccountInterests(data) {
        await System.dbAdapter.execQuery({
            queryName: deleteAccountInterests,
            params: data.params,
        });

        return System.dbAdapter.execQuery({
            queryName: setAccountInterests,
            params: data.params,
        });
    }
}

module.exports = {InterestsService};
