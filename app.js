const {Story} = require('story-system');
const config = require('./config.js');
const {CatsController} = require('./src/entities/cats/cats-controller.js');

class App {
    constructor() {
        Story.gateInit(config, [
            {EntityController: CatsController, domain: 'cats'},
        ]);
        Story.adaptersInit(config);
    }
}

// eslint-disable-next-line no-new
new App();
