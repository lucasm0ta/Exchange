# Exchange
Node.Js Exchange

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
## Database
Create a PostgreSQL database with the model on `Extras/model.sql` an 


    
# Developers

When executing, the following environment variables needs to be set for connecting
to the database as the following example:
    
    PGUSER=dbuser
    PGHOST=database.server.com
    PGPASSWORD=secretpassword
    PGDATABASE=exchange
    PGPORT=3211
    
## Documentation
    All code must be documented using JsDoc style.
