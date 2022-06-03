const {System: {validator: {schemaItems: {string, limit}}}} = require('story-system');

const getUsersSchema = {
    id: 'getUsersSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                limit,
                userId: string,
                login: string,
                password: string,
            },
            required: ['limit', 'login', 'password'],
        },
    },
    required: ['params'],
};

const createUserSchema = {
    id: 'createUserSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                userId: string,
                wsSessionId: string,
            },
            required: ['userId', 'wsSessionId'],
        },
    },
    required: ['params'],
};

module.exports = {
    getUsersSchema,
    createUserSchema,
};
