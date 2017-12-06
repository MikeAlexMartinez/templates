const mongooose = require('mongoose');

const options = {
  useMongoClient: true,
}

mongooose.Promise = global.Promise;

module.exports = function fetchDb(cb) {
  
  mongooose.connect('mongodb://localhost:27017/project-mam', options).then(
    () => cb(),
    (err) => cb(err)
  );
};