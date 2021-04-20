const express = require('express');
const { Pool, Client } = require('pg');

const user = require('./user/user');

const pool = new Pool({
  user:"postgres",
  host:"localhost",
  database:"organice",
  password:"",
  port:"5432"
});


console.log(pool);
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

pool.connect((err, client, done) => {
  if(err) console.log(err);
})

const app = express();
const router = express.Router();

app.listen(3000, () => {
  console.log(`Welcome to OrgaNice`);
});

app.use('/user', user)


module.exports = {
  pool,
  app
};