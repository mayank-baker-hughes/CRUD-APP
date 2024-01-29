const Pool = require('pg').Pool
const config = require('./config/db.config')

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:config.database,
    password:config.password,
    port:5432

})

module.exports = pool