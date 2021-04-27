import express from "express";
import Sequela from "./postgres/conector.js";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.PGUSER);
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


