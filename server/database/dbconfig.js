var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/xitio');

mongoose.connection.on('open', function() { 
  console.log('Mongoose connected.');
});