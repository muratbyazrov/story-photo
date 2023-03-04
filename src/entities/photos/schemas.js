const {Story: {validator: {schemaItems: {string, limit, boolean}}}} = require('story-system');

const getPhotosSchema = {
    id: 'getPhotosSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                limit,
                photoId: string,
            },
            required: ['limit'],
        },
    },
    required: ['params'],
};

const createPhotoSchema = {
    id: 'createPhotoSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                path1: string,
                replica1: boolean,
            },
            required: ['path1', 'replica1'],
        },
    },
    required: ['params'],
};

const modifyPhotoSchema = {
    id: 'modifyPhotoSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                photoId: string,
                replica2: boolean,
                path2: string,
            },
            required: ['photoId', 'replica2', 'path2'],
        },
    },
    required: ['params'],
};

module.exports = {
    getPhotosSchema,
    createPhotoSchema,
    modifyPhotoSchema,
};
