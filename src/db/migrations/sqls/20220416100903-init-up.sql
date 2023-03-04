CREATE TABLE IF NOT EXISTS photos (
     photo_id       BIGSERIAL               PRIMARY KEY
    ,path_1         TEXT                    NOT NULL
    ,path_2         TEXT
    ,replica_1      BOOLEAN                 NOT NULL
    ,replica_2      BOOLEAN
    ,create_dttm    TIMESTAMP DEFAULT NOW() NOT NULL
);
