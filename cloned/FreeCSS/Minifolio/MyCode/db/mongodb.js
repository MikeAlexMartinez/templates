const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/project-mam', {useMongoClient: true});
mongoose.Promise = global.Promise;

const Message = mongoose.model('message', messageSchema);