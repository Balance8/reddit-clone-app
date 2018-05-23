var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    content,
    votes: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Comment", commentSchema);
