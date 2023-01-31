const {Story} = require('story-system');
const {
    getInterests,
    getInterestsCategories,
    setAccountInterests,
    deleteAccountInterests,
    getAccountInterests,
} = require('./queries.js');

class InterestsService {
    getInterests(data) {
        return Story.dbAdapter.execQuery({
            queryName: getInterests,
            params: data.params,
        });
    }

    getInterestsCategories(data) {
        return Story.dbAdapter.execQuery({
            queryName: getInterestsCategories,
            params: data.params,
        });
    }

    getAccountInterests(data) {
        return Story.dbAdapter.execQuery({
            queryName: getAccountInterests,
            params: data.params,
        });
    }

    async setAccountInterests(data) {
        await Story.dbAdapter.execQuery({
            queryName: deleteAccountInterests,
            params: data.params,
        });

        return Story.dbAdapter.execQuery({
            queryName: setAccountInterests,
            params: data.params,
        });
    }
}

module.exports = {InterestsService};
