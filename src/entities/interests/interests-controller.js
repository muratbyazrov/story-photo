const {Story} = require('story-system');
const {
    getInterestsSchema,
    getInterestsCategoriesSchema,
    setAccountInterestsSchema,
    getAccountInterestsSchema,
} = require('./schemas.js');
const {InterestsService} = require('./interests-service');

class InterestsController {
    constructor() {
        this.interestsService = new InterestsService();
    }

    getInterests(data) {
        Story.validator.validate(data, getInterestsSchema);
        return this.interestsService.getInterests(data);
    }

    getInterestsCategories(data) {
        Story.validator.validate(data, getInterestsCategoriesSchema);
        return this.interestsService.getInterestsCategories(data);
    }

    getAccountInterests(data) {
        Story.validator.validate(data, getAccountInterestsSchema);
        return this.interestsService.getAccountInterests(data);
    }

    setAccountInterests(data) {
        Story.validator.validate(data, setAccountInterestsSchema);
        return this.interestsService.setAccountInterests(data);
    }
}

module.exports = {InterestsController};
