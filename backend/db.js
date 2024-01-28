const Pool = require('pg').Pool

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"Recipie",
    password:"Santosh@1324",
    port:5432

})

module.exports = pool