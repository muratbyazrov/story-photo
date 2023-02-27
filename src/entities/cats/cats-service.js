const {Story} = require('story-system');
const {
    getCats,
    createCat,
    modifyCat,
} = require('./queries.js');

class CatsService {
    getCats(data) {
        return Story.dbAdapter.execQuery({
            queryName: getCats,
            params: data.params,
        });
    }

    createCat(data) {
        return Story.dbAdapter.execQuery({
            queryName: createCat,
            params: data.params,
        });
    }

    modifyCat(data) {
        return Story.dbAdapter.execQuery({
            queryName: modifyCat,
            params: data.params,
        });
    }
}

module.exports = {CatsService};
