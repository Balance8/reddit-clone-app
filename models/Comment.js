var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    content: String,
    votes: Number
  }
);

module.exports = commentSchema
