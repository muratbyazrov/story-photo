module.exports = {
    createCat: `
        INSERT INTO cats (
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
        ON CONFLICT (cat_id) DO NOTHING;`,

    getCats: `
        SELECT
             cat_id AS "catId"
            ,first_name AS "firstName"
            ,birthday
            ,login
            ,password

        FROM
            cats AS ac
        WHERE
            TRUE
            /*login: AND login = :login*/
            /*password: AND password = :password*/
            /*catId: AND cat_id = :catId*/
            /*birthday: AND birthday = :birthday*/
        /*offset: OFFSET :offset*/
        /*limit: LIMIT :limit;*/`,

    modifyCat: `
        UPDATE
            cats
        SET
            modify_datetime = NOW()
            /*firstName: ,first_name = :firstName*/
            /*birthday: ,birthday = :birthday::DATE*/
            /*login: ,login = :login*/
            /*password: ,password = :password*/

        WHERE
            cat_id = :catId
        RETURNING
             cat_id AS "catId"
            /*firstName: ,first_name AS "firstName" */
            /*birthday: ,birthday */
            /*login: ,login */
            /*password: ,password */;`,
};
