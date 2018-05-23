var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var commentSchema = require('./Comment')

var postSchema = new Schema(
  {
    title,
    content,
    thumbnail_image_url,
    votes: Number,
    comments: [commentSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", postSchema);
