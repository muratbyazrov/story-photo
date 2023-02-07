require('dotenv')
    .config();
const {
    DB_USER,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    HTTP_PORT,
    HTTP_PATH,
    WS_PORT,
} = process.env;

module.exports = {
    db: {
        user: DB_USER || 'story',
        host: DB_HOST || '127.10.10.11',
        database: 'story-account',
        schema: 'story-account',
        password: DB_PASSWORD || 'test',
        port: DB_PORT || 5432,
    },
    http: {
        host: '192.168.1.13',
        port: HTTP_PORT || 3001,
        path: HTTP_PATH || '/story-account-api/v1',
    },
    ws: {
        host: '192.168.1.13',
        port: WS_PORT || 9001,
    },
    rmq: {
        host: '127.10.10.11',
        port: 5672,
        queueName: 'cats',
        user: 'test',
        password: 'test',
    },
    token: {
        enabled: true,
        key: 'token-key',
        expiresIn: 60 * 1000,
        uncheckMethods: {
            accounts: 'signIn',
        },
    },
};
