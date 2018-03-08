CREATE SCHEMA IF NOT EXISTS "exchange";

DROP TABLE IF EXISTS "exchange"."user";
CREATE TABLE "exchange"."user" (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

DROP TABLE IF EXISTS "exchange"."order";
CREATE TABLE "exchange"."order" (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES "exchange"."user"(id),
    datetime TIMESTAMP(6) NOT NULL,
    btc_quant INTEGER NOT NULL,
    btc_usd MONEY NOT NULL,
    buy BOOLEAN NOT NULL
);

DROP TABLE IF EXISTS "exchange"."quote";
CREATE TABLE "exchange"."quote" (
    id SERIAL PRIMARY KEY,
    coin TEXT NOT NULL,
    btc_usd MONEY NOT NULL,
    datetime TIMESTAMP(6) NOT NULL,
    exchange TEXT NOT NULL
);
