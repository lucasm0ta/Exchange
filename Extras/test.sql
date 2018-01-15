DROP SCHEMA IF EXISTS "Exchange";

-- -----------------------------------------------------
-- Schema Exchange
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS "Exchange" DEFAULT CHARACTER SET utf8 ;
\dt "Exchange" ;

-- -----------------------------------------------------
-- Table "Exchange"."user"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "Exchange"."user" ;

CREATE TABLE IF NOT EXISTS "Exchange"."user" (
  "id" INT NOT NULL UNIQUE SERIAL,
  "username" VARCHAR(45) NOT NULL UNIQUE,
  "password" VARCHAR(90) NOT NULL,
  "email" VARCHAR(60) NOT NULL UNIQUE,
  "telephone" VARCHAR(45) NULL UNIQUE,
  "status" varchar(10) NOT NULL,
  PRIMARY KEY ("id");
