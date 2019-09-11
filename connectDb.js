const mongoose = require('mongoose');

function connectDb(){
  mongoose.Promise = global.Promise;
  const CONNECTION_STRING = process.env.DB; //MongoClient.connect(CONNECTION_STRING, function(err, db) {});
  mongoose.connect(CONNECTION_STRING)
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('database is connected') // we're connected!
  });
  return db;
}

module.exports = connectDb;