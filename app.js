const {System} = require('story-system');
const config = require('./config.js');
const {AccountsController} = require('./src/entities/accounts/accounts-controller.js');
const {InterestsController} = require('./src/entities/interests/interests-controller.js');

class App {
    constructor() {
        System.init(config);
        System.gateInit([
            {EntityController: AccountsController, domain: 'accounts'},
            {EntityController: InterestsController, domain: 'interests'},
        ]);
        System.httpAdapter.run(request => System.gate.run(request));
        System.wsAdapter.run(request => System.gate.run(request));
    }
}

// eslint-disable-next-line no-new
new App();
