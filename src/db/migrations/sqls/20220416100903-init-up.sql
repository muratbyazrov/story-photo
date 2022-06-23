CREATE TABLE IF NOT EXISTS accounts (
    account_id TEXT NOT NULL UNIQUE,
    first_name TEXT NOT NULL,
    last_name TEXT,
    birthday DATE NOT NULL,
    photo_url TEXT NOT NULL,
    login TEXT NOT NULL,
    password TEXT NOT NULL,
    token TEXT,
    job TEXT,
    education TEXT,
    goal TEXT,
    about TEXT,
    height TEXT,
    weight TEXT,
    country TEXT,
    city TEXT,
);

CREATE TABLE IF NOT EXISTS interests (
    interest_id SMALLINT NOT NULL UNIQUE,
    interest_text TEXT NOT NULL UNIQUE,
    interest_category TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS interests_accounts (
    interest_id SMALLINT NOT NULL REFERENCES interests(interest_id),
    account_id TEXT NOT NULL REFERENCES accounts(account_id)
);
