const Post = require("./../models/Post");

function index(req, res) {
  Post.find({}, function(err, posts) {
    if (err) res.send(err);
    else res.json(posts);
  });
}

function create(req, res) {
  Post.create(req.body)
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.json({ error: err });
    });
}

function show(req, res) {
  Post.findById(req.params.id, function(err) {
    if (err) return next(err);
    //redirect is wrong

    res.render("posts/:post_id", {
      post
    });
  });
}

function update(req, res) {}

function destroy(req, res) {
  Post.findByIdAndRemove(req.params.id, function(err) {
    //redirect is wrong

    res.redirect("/posts");
  });
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy
};
