const {System: {validator: {schemaItems: {string, limit}}}} = require('story-system');

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

module.exports = {
    getAccountsSchema,
    createAccountSchema,
};
