# Database
 To setup the database, install `postgresql` to your machine.

# Setup

## Create Roles and Users
Create the following roles.

|    Roles   | Function |
|   ------  |----------|
| master | Used to create tables and make major changes when needed. **Should not be used in production unless in extreme cases with changes tested throughly.**|
| server | Used to access, insert, remove and update rows. Where these should be changes within tables.|

It's possible with the following code.

    CREATE ROLE "master";
    CREATE ROLE "server";

    ALTER ROLE "master" WITH SUPERUSER;

Create the following users for the database.

|    User   | Function |
|   ------  |----------|
| agamemnon | User to create tables on the "Exchange" database|
| achilles  | User used by the Node.js for |

## Create Schema and Database
All exchange data will be stored in the "Exchange" schema. Create it by the
following command:

