module.exports = {
    db: {
        user: 'story',
        host: '127.10.10.11',
        database: 'story-photo',
        schema: 'story-photo',
        password: 'test',
        port: 5432,
    },
    http: {
        host: '192.168.1.18',
        port: 3002,
        path: '/story-photo-api/v1',
    },
    ws: {
        host: '192.168.1.18',
        port: 9002,
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
            queue: 'photo',
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
    },
};
