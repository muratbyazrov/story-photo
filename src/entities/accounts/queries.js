module.exports = {
    createAccount: `
        INSERT INTO Accounts (
             first_name
            ,birthday
            ,login
            ,password
        )
        VALUES (
             :firstName
            ,:birthday
            ,:login
            ,:password
        )
        ON CONFLICT (Account_id) DO NOTHING;`,

    getAccounts: `
        SELECT
             Account_id AS "AccountId"
            ,first_name AS "firstName"
            ,birthday
            ,login
            ,password

        FROM
            Accounts AS ac
        WHERE
            TRUE
            /*login: AND login = :login*/
            /*password: AND password = :password*/
            /*AccountId: AND Account_id = :AccountId*/
            /*birthday: AND birthday = :birthday*/
        /*offset: OFFSET :offset*/
        /*limit: LIMIT :limit;*/`,

    modifyAccount: `
        UPDATE
            Accounts
        SET
            modify_datetime = NOW()
            /*firstName: ,first_name = :firstName*/
            /*birthday: ,birthday = :birthday::DATE*/
            /*login: ,login = :login*/
            /*password: ,password = :password*/

        WHERE
            Account_id = :AccountId
        RETURNING
             Account_id AS "AccountId"
            /*firstName: ,first_name AS "firstName" */
            /*birthday: ,birthday */
            /*login: ,login */
            /*password: ,password */;`,
};
