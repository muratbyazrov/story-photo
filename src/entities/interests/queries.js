module.exports = {
    getInterests: `
        SELECT
             interest_id AS "interestId"
            ,en_US AS "en_US"
            ,ru_RU AS "ru_RU"
            ,interest_category_id AS "interestCategoryId"
        FROM
            interests
        WHERE
            TRUE
            /*interestCategoryId: AND interest_category_id = :interestCategoryId */;`,

    getInterestsCategories: `
        SELECT
             interest_category_id AS "interestCategoryId"
            ,en_US AS "en_US"
            ,ru_RU AS "ru_RU"
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
        ON CONFLICT DO NOTHING
        RETURNING
             account_id AS "accountId"
            ,interest_id AS "interestId";`,

    deleteAccountInterests: `
        DELETE FROM
            accounts_interests
        WHERE
            account_id = :accountId;`,
};
