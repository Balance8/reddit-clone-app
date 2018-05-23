// First we must require our database
require("./config");

// Import our Mongoose models
const Post = require("./../models/Post");
const Comment = require("./../models/Comment");

// Destroy all data in database
const seed = Promise.all([Post.remove({}), Comment.remove({})]);

// Let's create 4 Posts
seed
  .then(() => {
      return Comment.create([
        {
          content: "First",
          votes: 34
        },
        {
          content: "First-lmao",
          votes: 20
        }
      ]);
  })

  // Let's log out all comments and add add 2 posts
  .then(comment => {
    console.log(comment);
      return Post.create([
        {
          title: "Ass",
          content: "Hello world",
          thumbnail_image_url: "https://i.imgur.com/r3Gb444.png",
          votes: 35,
          comments: [Comments[0]._id, Comments[1]._id]
        }
      ]);
  })

  // Let's log out teachers and close the connection to our Mongoose database
  .then(posts => {
    console.log(posts);
    require("mongoose").connection.close();
    process.exit();
  });
