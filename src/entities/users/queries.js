module.exports = {
    createUser: `
        INSERT INTO users (
             user_id
            ,first_name
            ,last_name
            ,age
            ,photo_url
            ,login
            ,password
            ,token
        )
        VALUES (
             :userId::TEXT
            ,:firstName
            ,:lastName
            ,:age
            ,:photoUrl
            ,:login
            ,:password
            ,:token
        )
        ON CONFLICT (user_id) DO NOTHING;`,

    getUsers: `
        SELECT
             user_id AS "userId"
            ,first_name AS "firstName"
            ,last_name AS "lastName"
            ,age
            ,photo_url AS "photoUrl"
            ,login AS "login"
            ,password
            ,token
        FROM
            users
        WHERE
            TRUE
            AND login = :login
            AND password = :password
            /*userId: user_id = :userId::TEXT*/
        /*offset: OFFSET :offset*/
        LIMIT :limit;`,
};
