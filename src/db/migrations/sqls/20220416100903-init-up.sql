CREATE TABLE IF NOT EXISTS users (
    user_id TEXT NOT NULL UNIQUE,
    first_name TEXT NOT NULL,
    age SMALLINT NOT NULL,
    photo_url TEXT NOT NULL
);