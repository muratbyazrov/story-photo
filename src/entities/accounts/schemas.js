const {System: {validator: {schemaItems: {string, limit, array}}}} = require('story-system');

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

const modifyAccountsSchema = {
    id: 'modifyAccountsSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                accountIds: {...array, items: string},
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
                height: string,
                weight: string,
                country: string,
                city: string,
            },
            required: ['accountIds'],
        },
    },
    required: ['params'],
};

module.exports = {
    getAccountsSchema,
    createAccountSchema,
    modifyAccountsSchema,
};
