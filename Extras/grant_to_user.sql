GRANT USAGE ON SCHEMA "exchange" TO <user>;

GRANT SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES
ON ALL TABLES IN SCHEMA "exchange" TO <user>;

GRANT USAGE, SELECT
ON ALL SEQUENCES IN SCHEMA "exchange" TO <user>;