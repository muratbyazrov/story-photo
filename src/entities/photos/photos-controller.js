const {Story} = require('story-system');
const {getPhotosSchema, createPhotoSchema, modifyPhotoSchema} = require('./schemas.js');
const {PhotosService} = require('./photos-service');

class PhotosController {
    constructor() {
        this.photoService = new PhotosService();
    }

    getPhotos(data) {
        Story.validator.validate(data, getPhotosSchema);
        return this.photoService.getPhotos(data);
    }

    createPhoto(data) {
        Story.validator.validate(data, createPhotoSchema);
        return this.photoService.createPhoto(data);
    }

    modifyPhoto(data) {
        Story.validator.validate(data, modifyPhotoSchema);
        return this.photoService.modifyPhoto(data);
    }
}

module.exports = {PhotosController};
