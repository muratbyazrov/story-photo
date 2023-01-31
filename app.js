const {Story} = require('story-system');
const config = require('./config.js');
const {AccountsController} = require('./src/entities/accounts/accounts-controller.js');
const {InterestsController} = require('./src/entities/interests/interests-controller.js');

class App {
    constructor() {
        Story.gateInit(config, [
            {EntityController: AccountsController, domain: 'accounts'},
            {EntityController: InterestsController, domain: 'interests'},
        ]);
        Story.adaptersInit(config);
    }
}

// eslint-disable-next-line no-new
new App();
