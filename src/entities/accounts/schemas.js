const {Story: {validator: {schemaItems: {string, limit}}}} = require('story-system');

const getAccountsSchema = {
    id: 'getAccountsSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                limit,
                photoId: string,
                login: string,
                password: string,
            },
            required: ['limit'],
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
                photoId: string,
                wsSessionId: string,
            },
            required: ['photoId', 'wsSessionId'],
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
                photoId: string,
                firstName: string,
                birthday: string,
                login: string,
                password: string,
            },
            required: ['photoId'],
        },
    },
    required: ['params'],
};

module.exports = {
    getAccountsSchema,
    createAccountSchema,
    modifyAccountSchema,
};
