const express = require('express');
const router = express.Router();
// @route  get api/Auth
// @desc   test route
// @access public
router.get('/', (req, res) => {
  res.send('Auth route ');
});
module.exports = router;
