const mongoose = require('mongoose');
const db = require('./db');
const Message = require('../models/message');

exports.submit = (req, res) => {
  db((err) => {
    if (err) {
      console.log("Error connecting to database!");
      const message = req.body;
      
      message.error = "Error connecting to database, please retry later.";
      res.status(500).send(message);
    }

    const newMessage = req.body;
    
    newMessage.source = 'Minifolio';  
    newMessage.date = new Date();
    
    const message = new Message(newMessage);
    
    const saved = (m) => {
      console.log("Message saved succesfully");
      
      m.success = "Message received! I will get back to you ASAP  ( ^_0)"; 
      console.log(m);
      
      mongoose.disconnect();
      res.status(201).send(m);
    };
    
    const error = (err) => {
      message.error = "We encountered an error, please try again later!";
      
      mongoose.disconnect();
      res.status(500).send(message);
    }
    
    message.save()
      .then(saved)
      .catch(error);
  });
  
};