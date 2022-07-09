module.exports = {
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

    deleteAccountInterests: `
        DELETE FROM
            accounts_interests
        WHERE
            account_id = :accountId;`,
};
