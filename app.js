const {System} = require('story-system');
const config = require('./config.js');
const {AccountsGate} = require('./src/entities/accounts/accounts-gate.js');

class App {
    constructor() {
        System.init(config);
        System.gateInit([
            {EntityGate: AccountsGate, domain: 'accounts'},
        ]);
        System.httpAdapter.run(request => System.gate.run(request));
        System.wsAdapter.run(request => System.gate.run(request));
    }
}

// eslint-disable-next-line no-new
new App();
