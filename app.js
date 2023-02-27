const {Story} = require('story-system');
const config = require('./config.js');
const {AccountsController} = require('./src/entities/accounts/accounts-controller.js');

class App {
    constructor() {
        Story.gateInit(config, [
            {EntityController: AccountsController, domain: 'photos'},
        ]);
        Story.adaptersInit(config);
    }
}

// eslint-disable-next-line no-new
new App();
