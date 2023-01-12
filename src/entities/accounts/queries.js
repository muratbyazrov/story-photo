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
             ac.account_id AS "accountId"
            ,ac.first_name AS "firstName"
            ,ac.birthday
            ,ac.login
            ,ac.password
            ,ac.job
            ,ac.education
            ,ac.about
            ,ac.country
            ,ac.city
            ,gnd.gender_value AS "gender"
            ,ornt.orientations_value AS "orientation"
        FROM
            accounts AS ac
            LEFT JOIN genders AS gnd ON gnd.gender_id = ac.gender_id
            LEFT JOIN orientations AS ornt ON ac.orientation_id = ornt.orientation_id
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
            /*genderId: ,gender_id = :genderId*/
            /*orientationId: ,orientation_id = :orientationId*/
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
            /*genderId: ,gender_id AS "genderId"*/
            /*orientationId: ,orientation_id AS "orientationId"*/
            /*city: ,city */;`,
};
