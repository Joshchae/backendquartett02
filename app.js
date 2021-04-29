require('dotenv').config()
const express = require('express')
// const errorHandler = require('./middlewares/error')
const db = require('./dbinit')
const cors = require('cors')

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.get('/users', (req, res, next) => {
    db
    .query("SELECT * FROM users;")
    .then(data => res.json(data.rows))
    .catch(err => next(err))
})
// app.use(errorHandler);


app.listen(port, () => console.log(`Started up server on http://localhost:${port}`))
