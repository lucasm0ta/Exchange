
DROP SCHEMA IF EXISTS "Exchange";

-- -----------------------------------------------------
-- Schema Exchange
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS "Exchange";
\dt "Exchange" ;

-- -----------------------------------------------------
-- Table "Exchange"."user"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "Exchange"."user" ;
CREATE TABLE "Exchange"."user"
(
    id serial NOT NULL,
    email character varying(60) NOT NULL,
    hash character varying(60) NOT NULL,
    telephone character varying(30),
    name character varying(90),
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);
ALTER TABLE "Exchange"."user"
    OWNER to "agamemnon";

GRANT SELECT, INSERT, UPDATE, DELETE ON "Exchange"."user" TO "achilles";



