import "express";
import "./postgres/conector";


const user = require('./user/user');


try {
  await Sequela.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const app = express();
const router = express.Router();

app.listen(3000, () => {
  console.log(`Welcome to OrgaNice`);
});

app.use('/user', user)
