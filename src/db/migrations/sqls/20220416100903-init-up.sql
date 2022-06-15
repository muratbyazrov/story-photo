CREATE TABLE IF NOT EXISTS accounts (
    account_id TEXT NOT NULL UNIQUE,
    first_name TEXT NOT NULL,
    last_name TEXT,
    age SMALLINT NOT NULL,
    photo_url TEXT NOT NULL,
    login TEXT NOT NULL,
    password TEXT NOT NULL,
    token TEXT
);
