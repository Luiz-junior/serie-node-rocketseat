const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin123@ds119692.mlab.com:19692/serie-node');
mongoose.Promise = global.Promise;

module.exports = mongoose;

