const {System: {validator: {schemaItems: {string, number, array}}}} = require('story-system');

const getInterestsSchema = {
    id: 'getInterestsSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                interestCategoryId: number,
            },
        },
    },
    required: ['params'],
};

const getInterestsCategoriesSchema = {
    id: 'getInterestsCategoriesSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {},
        },
    },
    required: ['params'],
};

const setAccountInterestsSchema = {
    id: 'setAccountInterestsSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                accountId: string,
                interestIds: {...array, items: number},
            },
            required: ['accountId', 'interestIds'],
        },
    },
    required: ['params'],
};

module.exports = {
    getInterestsSchema,
    getInterestsCategoriesSchema,
    setAccountInterestsSchema,
};
