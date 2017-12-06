const mongoose = require('mongoose');
const Message = require('../models/message');

const submit = (req, res) => {
    const m = req.body;
  
    console.log(m);
  
    m["success"] = "Message received! I will get back to you ASAP  ( ^_0)";
  
    res.status(201).send(m);
};

module.exports = {
  submit: submit,
};