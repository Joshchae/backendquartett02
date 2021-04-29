const pool = require('./dbinit')

pool.on('connect', () => {
    console.log('connected to database');
    });

