const { Pool } = require('pg');

/**
 *
 * @type {{pool: PG.Pool}}
 */
var db = {
    pool : new Pool({
        idleTimeoutMillis : 30000,
        connectionTimeoutMillis : 3000,
        max : 10
    })
};

/**
 * Run query on database.
 * @param query
 * @param param
 * @param cb Callback function that receives the errror and result respectively.
 */
db.query = (query, param, cb) => {
    db.pool.query(query, param, cb);
};

module.exports = db;
