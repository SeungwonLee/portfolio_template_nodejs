var mongoose = require('mongoose');

var experienceSchema = mongoose.Schema({
  title: { type: String, required: true },
  sub_title: { type: String, required: true },
  description: { type: String },
  start_date: { type: Date, default: Date.now },
  end_date: { type: Date, default: Date.now }
});
var Experience = mongoose.model('experience', experienceSchema);
module.exports = Experience
