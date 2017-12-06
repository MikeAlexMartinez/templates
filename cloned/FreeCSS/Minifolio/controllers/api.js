const express = require('express')
    , router = express.Router();

const messsages = require('./messages');

router
  .route('/message')
  .post(messages);

module.exports = router;