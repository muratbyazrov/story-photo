const {System: {validator: {schemaItems: {string, number, limit, array}}}} = require('story-system');

const getAccountsSchema = {
    id: 'getAccountsSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                limit,
                accountId: string,
                login: string,
                password: string,
            },
            required: ['limit', 'login', 'password'],
        },
    },
    required: ['params'],
};

const createAccountSchema = {
    id: 'createAccountSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                accountId: string,
                wsSessionId: string,
            },
            required: ['accountId', 'wsSessionId'],
        },
    },
    required: ['params'],
};

const modifyAccountSchema = {
    id: 'modifyAccountSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                accountId: string,
                firstName: string,
                lastName: string,
                birthday: string,
                photoUrl: string,
                login: string,
                password: string,
                job: string,
                education: string,
                goal: string,
                about: string,
                height: number,
                weight: number,
                country: string,
                city: string,
            },
            required: ['accountId'],
        },
    },
    required: ['params'],
};

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
    getAccountsSchema,
    createAccountSchema,
    modifyAccountSchema,
    getInterestsSchema,
    getInterestsCategoriesSchema,
    setAccountInterestsSchema,
};
