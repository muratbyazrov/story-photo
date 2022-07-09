require('dotenv').config();
const {
    DB_USER,
    DB_HOST,
    DB_DATABASE,
    DB_PASSWORD,
    DB_PORT,
    HTTP_PORT,
    HTTP_PATH,
    WS_PORT,
} = process.env;

module.exports = {
    db: {
        user: DB_USER || 'story-account',
        host: DB_HOST || '127.10.10.28',
        database: DB_DATABASE || 'story-account',
        password: DB_PASSWORD || 'test',
        port: DB_PORT || 5432,
    },
    http: {
        // host: '192.168.1.71',
        host: 'localhost',
        port: HTTP_PORT || 3001,
        path: HTTP_PATH || '/story-account-api/v1',
    },
    ws: {
        // host: '192.168.1.71',
        host: 'localhost',
        port: WS_PORT || 9001,
    },
};
