var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  description: { type: String }
});

module.exports = mongoose.model('Item', ItemSchema);

