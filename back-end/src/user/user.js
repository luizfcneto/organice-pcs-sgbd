const express = require('express');
const user = require('./usermodel');

const router = express.Router();

router.get('/', async (req, res) => {
  const response = await user.get(req.data);
  res.send(response);
});

module.exports = router;