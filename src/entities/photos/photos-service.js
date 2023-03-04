const {Story} = require('story-system');
const {getPhotos, createPhoto, modifyPhoto} = require('./queries.js');

class PhotosService {
    getPhotos(data) {
        return Story.dbAdapter.execQuery({
            queryName: getPhotos,
            params: data.params,
        });
    }

    createPhoto(data) {
        return Story.dbAdapter.execQuery({
            queryName: createPhoto,
            params: data.params,
        });
    }

    modifyPhoto(data) {
        return Story.dbAdapter.execQuery({
            queryName: modifyPhoto,
            params: data.params,
        });
    }
}

module.exports = {PhotosService};
