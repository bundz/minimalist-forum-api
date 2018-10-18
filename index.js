const express = require(`express`);
const server = express();
const posts = [];


function getPosts (req, res) {
  return res.status(200).send(posts);
}

function createPost (req, res) {

  if(!(req.body.text || req.body.user)) {
    return res.status(400).send({ message: `text or user missing` });
  } 

  posts.unshift({ text: req.body.text, user: req.body.user });

  return res.status(200).send();
}

server.use(express.json({}));
server.get(`/post`, getPosts);
server.post(`/post`, createPost);

server.listen(3000, function () {
  console.log(`Minimalist Forum running!`);
})