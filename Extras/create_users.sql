CREATE ROLE "master";
CREATE ROLE "server";
-- CREATE ROLE "administrator";

ALTER ROLE "master" WITH SUPERUSER ;
ALTER ROLE "server" WITH SELECT INSERT UPDATE DELETE;

-- Super User
--     ALL PRIVILEGES
CREATE USER "agamemnon" WITH ROLE "master" PASSWORD "chooseasyouwish";

-- Table Operations User
--     SELECT|INSERT|UPDATE|DELETE
CREATE USER "achilles" WITH ROLE "server" PASSWORD "chooseasyouwish";
