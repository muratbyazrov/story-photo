module.exports = {
    createAccount: `
        INSERT INTO accounts (
             account_id
            ,first_name
            ,last_name
            ,age
            ,photo_url
            ,login
            ,password
            ,token
        )
        VALUES (
             :accountId::TEXT
            ,:firstName
            ,:lastName
            ,:age
            ,:photoUrl
            ,:login
            ,:password
            ,:token
        )
        ON CONFLICT (account_id) DO NOTHING;`,

    getAccounts: `
        SELECT
             account_id AS "accountId"
            ,first_name AS "firstName"
            ,last_name AS "lastName"
            ,age
            ,photo_url AS "photoUrl"
            ,login AS "login"
            ,password
            ,token
        FROM
            accounts
        WHERE
            TRUE
            AND login = :login
            AND password = :password
            /*accountId: account_id = :accountId::TEXT*/
        /*offset: OFFSET :offset*/
        LIMIT :limit;`,
};
