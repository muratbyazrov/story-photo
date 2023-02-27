const {Story} = require('story-system');
const {
    getCatsSchema,
    createCatSchema,
    modifyCatSchema,
    signInSchema,
} = require('./schemas.js');
const {CatsService} = require('./cats-service');
const config = require('../../../config');

class CatsController {
    constructor() {
        this.catsService = new CatsService();
    }

    async signIn(data) {
        Story.validator.validate(data, signInSchema);
        const [cat] = await this.catsService.getCats(data);
        if (!cat) {
            throw new Story.errors.Forbidden('Нет такого аккаунта');
        }

        return {token: await Story.token.generateToken(cat, config.token)};
    }

    getCats(data) {
        Story.validator.validate(data, getCatsSchema);
        return this.catsService.getCats(data);
    }

    createCat(data) {
        Story.validator.validate(data, createCatSchema);
        return this.catsService.createCat(data);
    }

    async modifyCat(data) {
        Story.validator.validate(data, modifyCatSchema);
        const [modifiedData] = await this.catsService.modifyCat(data);
        await Story.rmqAdapter.publish({
            message: {
                domain: 'cats',
                event: 'catModified',
                params: modifiedData,
                token: await Story.token.generateToken({}, config.token),
            },
            options: config.rmq.publish.exchanges.cat,
        });

        return modifiedData;
    }
}

module.exports = {CatsController};
