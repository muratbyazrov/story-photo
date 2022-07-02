const {System: {validator: {schemaItems: {string, number, limit}}}} = require('story-system');

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

module.exports = {
    getAccountsSchema,
    createAccountSchema,
    modifyAccountSchema,
};
