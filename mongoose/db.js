var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SEditor2');
var db = mongoose.connection;
var Schema = mongoose.Schema;

var User = new Schema({
  name: String,
  date: { type: Date, default: Date.now }
});

var collectionsO = new Schema({
  name: String,
  source: String,
  owner: String,
  shortlink: String,
  date: { type: Date, default: Date.now }
});

module.exports.Snip = mongoose.model('name', User);
var modColl = mongoose.model('collections', collectionsO);
module.exports.collections = modColl;

exports.Save = function save(inst) {
  inst.save(function (err, inst) {
    if (err) return console.error(err);
    console.log('success');
  });
};

exports.Find = function search (keyword) {
  console.log(keyword)
  modColl.find({shortlink: keyword}, function (err, collection) {
    if (err) return console.log(err);
    return collection;
  });
  console.log('New Shit')
}
