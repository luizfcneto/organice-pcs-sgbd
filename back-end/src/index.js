const express = require('express');
const { Pool, Client } = require('pg');

const user = require('./user/user');

const pool = new Client({
  user:"postgres",
  host:"localhost",
  database:"",
  password:"organice",
  port:"5432"
});

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