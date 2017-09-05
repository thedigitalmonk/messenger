var mongoose = require('mongoose');
var Schema =  mongoose.Schema;
var validtor = require('mongoose-unique-validator');

var schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

schema.plugin(validtor);

module.exports = mongoose.model('User', schema);
