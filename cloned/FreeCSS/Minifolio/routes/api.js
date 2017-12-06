const express = require('express')
    , router = express.Router();

const messages = require('../controllers/messages');

router
  .route('/message')
  .post(messages.submit);

module.exports = router;