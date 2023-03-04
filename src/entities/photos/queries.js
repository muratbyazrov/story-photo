module.exports = {
    createPhoto: `
        INSERT INTO photos (
             path_1
            ,replica1
        )
        VALUES (
             :path1
            ,:replica1
        )
        RETURNING
             photo_id AS "photoId"
            ,path_1 AS 'path1'
            ,replica_1 AS 'replica1'
            ,replica_2 AS 'replica2';`,

    getPhotos: `
        SELECT
             photo_id AS "photoId"
            ,path_1 AS 'path1'
            ,path_2 AS 'path2'
            ,replica_1 AS "replica1"
            ,replica_2 AS "replica2"
            ,create_dttm AS "createDttm"
        FROM
            photos
        WHERE
            TRUE
            /*photoId: AND photoId = :photoId*/
        /*offset: OFFSET :offset*/
        LIMIT :limit;`,

    modifyPhoto: `
        UPDATE
            photos
        SET
            ,replica_2 = :replica2
            ,path_2 = :path2
        WHERE
            photo_id = :photoId
        RETURNING
             photo_id AS "photoId"
            ,path_1 AS "path1"
            ,path_2 AS "path2"
            ,replica_1 AS 'replica1'
            ,replica_2 AS 'replica2';`,
};
