const {Pool} = require('pg')

const pool = new Pool()

module.exports = {
    query : (text, params) => pool.query(text, params)
}


// const dotenv = require('dotenv')
// dotenv.config()

// const databaseConfig = { 
//     connectionString : process.env.DATABASE_URL
// }
// const pool = new Pool(databaseConfig)

// module.exports = pool;
