require('dotenv')
    .config();
const {
    DB_USER,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    HTTP_PORT,
    HTTP_PATH,
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
        host: '192.168.1.18',
        port: HTTP_PORT || 3001,
        path: HTTP_PATH || '/story-account-api/v1',
    },
    rmq: {
        connect: {
            host: '127.10.10.11',
            port: 5672,
            user: 'test',
            password: 'test',
        },
        consume: {
            exchange: 'story',
            queue: 'account',
            selfAck: true,
        },
        publish: {
            exchanges: {
                account: {
                    exchange: 'story',
                },
            },
        },
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
