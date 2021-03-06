const Mongoose = require('mongoose');

const Config = require('./config/config');

Mongoose.Promise = global.Promise;
Mongoose.connect(`mongodb://${Config.mongo.username}:${Config.mongo.password}@${Config.mongo.url}/${Config.mongo.database}`);
let db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Connection with database succeeded.');
});

exports.Mongoose = Mongoose;
exports.db = db;
