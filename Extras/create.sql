
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
  PRIMARY KEY ("id");


-- -----------------------------------------------------
-- Table "Exchange"."coin"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "Exchange"."coin" ;

CREATE TABLE IF NOT EXISTS "Exchange"."coin" (
  "id" INT NOT NULL AUTO_INCREMENT,
  "name" VARCHAR(45) NOT NULL,
  "precision" INT NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE INDEX "name_UNIQUE" ("name" ASC));


-- -----------------------------------------------------
-- Table "Exchange"."wallet"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "Exchange"."wallet" ;

CREATE TABLE IF NOT EXISTS "Exchange"."wallet" (
  "user_id" INT NOT NULL,
  "coin_id" INT NOT NULL,
  "value" VARCHAR(45) NULL,
  PRIMARY KEY ("user_id", "coin_id"),
  INDEX "fk_wallet_user_idx" ("user_id" ASC),
  INDEX "fk_wallet_coin1_idx" ("coin_id" ASC),
  CONSTRAINT "fk_wallet_user"
    FOREIGN KEY ("user_id")
    REFERENCES "Exchange"."user" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_wallet_coin1"
    FOREIGN KEY ("coin_id")
    REFERENCES "Exchange"."coin" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table "Exchange"."proposal"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "Exchange"."proposal" ;

CREATE TABLE IF NOT EXISTS "Exchange"."proposal" (
  "id" INT NOT NULL,
  "user" INT NOT NULL,
  "coin" INT NOT NULL,
  "value" VARCHAR(45) NOT NULL,
  PRIMARY KEY ("id"),
  INDEX "fk_proposal_wallet1_idx" ("user" ASC, "coin" ASC),
  CONSTRAINT "fk_proposal_wallet1"
    FOREIGN KEY ("user" , "coin")
    REFERENCES "Exchange"."wallet" ("user_id" , "coin_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table "Exchange"."transaction"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "Exchange"."transaction" ;

CREATE TABLE IF NOT EXISTS "Exchange"."transaction" (
  "id" INT NOT NULL,
  "value_from" VARCHAR(45) NOT NULL,
  "user_from" INT NOT NULL,
  "coin_from" INT NOT NULL,
  "value_to" VARCHAR(45) NOT NULL,
  "user_to" INT NOT NULL,
  "coin_to" INT NOT NULL,
  PRIMARY KEY ("id"),
  INDEX "fk_transaction_wallet1_idx" ("user_from" ASC, "coin_from" ASC),
  INDEX "fk_transaction_wallet2_idx" ("user_to" ASC, "coin_to" ASC),
  CONSTRAINT "fk_transaction_wallet1"
    FOREIGN KEY ("user_from" , "coin_from")
    REFERENCES "Exchange"."wallet" ("user_id" , "coin_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_transaction_wallet2"
    FOREIGN KEY ("user_to" , "coin_to")
    REFERENCES "Exchange"."wallet" ("user_id" , "coin_id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
