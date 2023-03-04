const {Story} = require('story-system');
const config = require('./config.js');
const {PhotosController} = require('./src/entities/photos/photos-controller.js');

class App {
    constructor() {
        Story.gateInit(config, [
            {EntityController: PhotosController, domain: 'photos'},
        ]);
        Story.adaptersInit(config);
    }
}

// eslint-disable-next-line no-new
new App();
