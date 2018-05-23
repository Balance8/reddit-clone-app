var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema(
  {
    title,
    content,
    thumbnail_image_url,
    votes,
    comments: Array
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", postSchema);
