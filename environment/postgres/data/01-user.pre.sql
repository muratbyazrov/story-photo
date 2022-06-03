CREATE USER "story-account" WITH PASSWORD 'test';
\connect "story-account";
GRANT ALL PRIVILEGES ON SCHEMA "story-account" TO "story-account";
