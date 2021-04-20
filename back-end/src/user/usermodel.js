const { pool } = require('../index');

class User {

  get(data) {
    pool.connect();
    pool.query(`SELECT * FROM users WHERE id = ($1)`, values, (err, res) => {
      if(err) {
        console.log(err);
      } else { 
        console.log(res.rows[0]);
      }
    })
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