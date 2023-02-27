CREATE TABLE IF NOT EXISTS cats (
     cat_id BIGSERIAL NOT NULL UNIQUE
    ,first_name TEXT NOT NULL
    ,birthday DATE NOT NULL
    ,login TEXT NOT NULL
    ,password TEXT NOT NULL
);

INSERT INTO cats (
     first_name
    ,birthday
    ,login
    ,password
) VALUES
     ('Феликс', NOW(), 'felixLogin', 'felixPassword')
    ,('Борис', NOW(), 'borisLogin', 'borisPassword');

