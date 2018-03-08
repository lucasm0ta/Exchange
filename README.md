# Exchange
An REST API made in Node.Js simulating some crypto exchange functionalities.
# Requirements

* Node.JS >= v9.5.0 (Recommended use
of [nvm](https://github.com/creationix/nvm#install-script) for management)
* Postgres >= 10.1


# Dependency
  
  * bcrypt
  * body-parser
  * chai
  * compression
  * cron
  * debug
  * express
  * gulp
  * gulp-minify
  * isemail
  * less-middleware
  * morgan
  * pg
  * poloniex-api-node

# API
## Create User
POST a request to `/users` with the following body structure.

    {
        "email": "email@email.com",
        "password": "password"
    }

## Create Order
POST a request to `/orders` with the following body structure:

    {
        "email": "email@email.com",
        "password": "password",
        "quant" : "12",
        "value" : "10000.00",
        "buy" : "true"
    }
## Get Quote
GET a request to `/quotes` and you receve something like:

    {
        "coin": "BTC",
        "value": "$9,709.00",
        "datetime": "2018-03-08T00:45:03.000Z",
        "exchange": "poloniex",
        "increase": "-$51.00"
    }
# Set Up
## Version
Check if you are using at least Node.JS v9.5 (Recommended use of
[nvm](https://github.com/creationix/nvm#install-script) for management)

## Database
Create a PostgreSQL database with the model on `Extras/model.sql`.
In case of another user is used to manage the input and output,
the file `Extras/grant_to_user.sql` helps with it needing little editing. Store the
following connection parameters for the next session.

* host
* user
* password
* database
* port

And then start the `postgres` service on your machine.
(Methods vary for one OS to another)
    
## Evironment Variables

When executing, the following environment variables needs to be set for connecting
to the database as the following example:
    
    PGUSER=dbuser
    PGHOST=database.server.com
    PGPASSWORD=secretpassword
    PGDATABASE=exchange
    PGPORT=3211
    
## Execution
With all the previous topics resolved, use the following commands on the `Exchange`
folder:

    npm install
    node bin/www

It should be already running. In case of any error or weird behavior, report bugs.

# Documentation
    All code must (should ¯\_(ツ)_/¯) be documented using JsDoc style.
