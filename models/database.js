const pg = require('pg')
const pool = new pg.Pool()

// connection using created pool
pool.connect(function(err, client, done) {
    if (!err) {
        const query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) ' +
            'not null, complete BOOLEAN)', (err, res) => {
            if (err) {
                console.error(err);
            } else {

            }
        })
    } else {
        console.error(err);
    }
    done();
});

// pool shutdown
pool.end()