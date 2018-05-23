/*

    Please import the correct files here.

*/
const Comment = require("./../models/Comment");

function create(req, res) {
  Comment.create(req.body)
    .then(comment => {
      res.json(comment);
    })
    .catch(err => {
      res.json({ error: err });
    });
}

function update(req, res) {}

function destroy(req, res) {
  Comment.findByIdAndRemove(req.params.id, function(err) {
    //redirect is wrong
      res.redirect("/posts");
  });
}

module.exports = {
  create,
  update,
  destroy
};
