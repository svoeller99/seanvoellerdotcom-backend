var express = require('express');
var router = express.Router();

/* GET index. */
router.get('/', function(req, res) {
  res.send('respond with stuff');
});

module.exports = router;
