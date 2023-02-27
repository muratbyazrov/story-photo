CREATE TABLE IF NOT EXISTS accounts (
     account_id BIGSERIAL NOT NULL UNIQUE
    ,photo_id BIGINT
    ,login TEXT NOT NULL
    ,password TEXT NOT NULL
);

INSERT INTO accounts (
     first_name
    ,photo_id
    ,login
    ,password
) VALUES
     ('Феликс', 'http://', 'felixLogin', 'felixPassword')
    ,('Борис', 'http://', 'borisLogin', 'borisPassword');

