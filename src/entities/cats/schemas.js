const {Story: {validator: {schemaItems: {string, limit}}}} = require('story-system');

const getCatsSchema = {
    id: 'getCatsSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                limit,
                catId: string,
                login: string,
                password: string,
            },
            required: ['limit'],
        },
    },
    required: ['params'],
};

const createCatSchema = {
    id: 'createCatSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                catId: string,
                wsSessionId: string,
            },
            required: ['catId', 'wsSessionId'],
        },
    },
    required: ['params'],
};

const modifyCatSchema = {
    id: 'modifyCatSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                catId: string,
                firstName: string,
                birthday: string,
                login: string,
                password: string,
            },
            required: ['catId'],
        },
    },
    required: ['params'],
};

const signInSchema = {
    id: 'signInSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                login: string,
                password: string,
            },
            required: ['login', 'password'],
        },
    },
    required: ['params'],
};

module.exports = {
    getCatsSchema,
    createCatSchema,
    modifyCatSchema,
    signInSchema,
};
