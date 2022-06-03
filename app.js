const {System} = require('story-system');
const config = require('./config.js');
const {UsersGate} = require('./src/entities/users/users-gate.js');

class App {
    constructor() {
        System.init(config);
        System.gateInit([
            {EntityGate: UsersGate, domain: 'users'},
        ]);
        System.httpAdapter.run(request => System.gate.run(request));
        System.wsAdapter.run(request => System.gate.run(request));
    }
}

// eslint-disable-next-line no-new
new App();
