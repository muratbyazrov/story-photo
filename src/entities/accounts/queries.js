module.exports = {
    createAccount: `
        INSERT INTO accounts (
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
        ON CONFLICT (account_id) DO NOTHING;`,

    getAccounts: `
        SELECT
             account_id AS "accountId"
            ,first_name AS "firstName"
            ,birthday
            ,login
            ,password
            ,job
            ,education
            ,about
            ,country
            ,city
            ,gender
            ,orientation
            ,goal
        FROM
            accounts AS ac
        WHERE
            TRUE
            /*login: login = :login*/
            /*password: password = :password*/
            /*accountId: account_id = :accountId*/
            /*birthday: birthday = :birthday*/
            /*country: country = :country*/
            /*city: city = :city*/
        /*offset: OFFSET :offset*/
        LIMIT :limit;`,

    modifyAccount: `
        UPDATE
            accounts
        SET
            modify_datetime = NOW()
            /*firstName: ,first_name = :firstName*/
            /*birthday: ,birthday = :birthday::DATE*/
            /*login: ,login = :login*/
            /*password: ,password = :password*/
            /*job: ,job = :job*/
            /*education: ,education = :education*/
            /*about: ,about = :about*/
            /*country: ,country = :country*/
            /*city: ,city = :city*/
            /*gender: ,gender = :gender*/
            /*orientation: ,orientation = :orientation*/
            /*goal: ,goal = :goal*/
        WHERE
            account_id = :accountId
        RETURNING
             account_id AS "accountId"
            /*firstName: ,first_name AS "firstName" */
            /*birthday: ,birthday */
            /*login: ,login */
            /*password: ,password */
            /*job: ,job */
            /*education: ,education */
            /*about: ,about */
            /*country: ,country */
            /*gender: ,gender AS "gender"*/
            /*orientation: ,orientation AS "orientation"*/
            /*goal: ,goal AS "goal"*/
            /*city: ,city */;`,
};
