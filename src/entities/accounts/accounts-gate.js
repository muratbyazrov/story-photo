const {AccountsController} = require('./accounts-controller.js');

class AccountsGate {
    constructor() {
        this.usersController = new AccountsController();
    }

    run(data) {
        return this.usersController[data.event](data);
    }
}

module.exports = {AccountsGate};
