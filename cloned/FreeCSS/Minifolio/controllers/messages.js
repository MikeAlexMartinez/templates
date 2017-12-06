const mongoose = require('mongoose');
const Message = require('../models/message');

exports.submit = (req, res) => {
    const newMessage = req.body;

    newMessage.source = 'Minifolio';  
    newMessage.date = new Date();
    console.log(newMessage);

    const message = new Message(newMessage);

    const saved = (m) => {
      console.log("Message saved succesfully");
      
      m.success = "Message received! I will get back to you ASAP  ( ^_0)"; 
      console.log(m);

      res.status(201).send(m);
    };

    const error = (err) => {
      newMessage["error"] = "We encountered an error, please try again later!";
      res.status(500).send(newMessage);
    }

    message.save()
      .then(saved)
      .catch(error);
};