const {Pool} = require('pg');

const pool = new Pool({
  user:"postgres",
  host:"localhost",
  database:"organice",
  password:"",
  port:"5432"
})

class User {

  get(){
    pool
    .query('SELECT * FROM users')
    .then(res => console.log('user:', res.rows[0]))
    .catch(err =>
    setImmediate(() => {
    throw err
  })
)
  }
  
  create(data) {
    pool.query('INSERT INTO users VALUES ($1, $2, $3, $4, $5)', values, (err, res) => {
      if(err) {
        console.log(err);
      } else { 
        console.log(res.rows[0]);
      }
    });
  }

  update(data) {
    pool.query('UPDATE ');
  }
} 

module.exports = new User();