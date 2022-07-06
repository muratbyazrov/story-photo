module.exports = {
    createAccount: `
        INSERT INTO accounts (
             account_id
            ,first_name
            ,last_name
            ,birthday
            ,photo_url
            ,login
            ,password
            ,token
        )
        VALUES (
             :accountId::TEXT
            ,:firstName
            ,:lastName
            ,:birthday
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
            ,birthday
            ,photo_url AS "photoUrl"
            ,login AS "login"
            ,password
            ,token
            ,job
            ,education
            ,goal
            ,about
            ,height
            ,weight
            ,country
            ,city
            ,gender
        FROM
            accounts
        WHERE
            TRUE
            AND login = :login
            AND password = :password
            /*accountId: account_id = :accountId::TEXT*/
        /*offset: OFFSET :offset*/
        LIMIT :limit;`,

    modifyAccount: `
        UPDATE
            accounts
        SET
            modify_datetime = NOW()
            /*firstName: ,first_name = :firstName*/
            /*lastName: ,last_name = :lastName*/
            /*birthday: ,birthday = :birthday::DATE*/
            /*photo_url: ,photoUrl = :photo_url*/
            /*login: ,login = :login*/
            /*password: ,password = :password*/
            /*token: ,token = :token*/
            /*job: ,job = :job*/
            /*education: ,education = :education*/
            /*goal: ,goal = :goal*/
            /*about: ,about = :about*/
            /*height: ,height = :height*/
            /*weight: ,weight = :weight*/
            /*country: ,country = :country*/
            /*city: ,city = :city*/
            /*gender: ,gender = :gender*/
        WHERE
            account_id = :accountId
        RETURNING
             account_id AS "accountId"
            /*firstName: ,first_name AS "firstName" */
            /*lastName: ,last_name AS "lastName" */
            /*birthday: ,birthday */
            /*photoUrl: ,photo_url AS "photoUrl" */
            /*login: ,login */
            /*password: ,password */
            /*token: ,token */
            /*job: ,job */
            /*education: ,education */
            /*goal: ,goal */
            /*about: ,about */
            /*height: ,height */
            /*weight: ,weight */
            /*country: ,country */
            /*city: ,city */;`,

    getInterests: `
        SELECT
             interest_id AS "interestId"
            ,interest_value_ru AS "interestValueRu"
            ,interest_value_en AS "interestValueEn"
            ,interest_category_id AS "interestCategoryId"
        FROM
            interests
        WHERE
            TRUE
            /*interestCategoryId: AND interest_category_id = :interestCategoryId */;`,

    getInterestsCategories: `
        SELECT
             interest_category_id AS "interestCategoryId"
            ,interest_category_value_ru AS "interestCategoryValueRu"
            ,interest_category_value_en AS "interestCategoryValueEn"
        FROM
            interest_categories
        WHERE
            TRUE;`,

    setAccountInterests: `
        INSERT INTO accounts_interests (
             interest_id
            ,account_id
        )
        VALUES (
             (UNNEST(:interestIds::INT[]))
            ,:accountId
        )
        RETURNING
             account_id AS "accountId"
            ,interest_id AS "interestId";`,
};
