const express = require("express");
const request = require("request");

const { response } = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("What's up world");
});

app.get("/posts", (req, res) => {
  const request = require("request-promise");
  let postsData;
  let usersData;
  let commentsData;

  request(`https://jsonplaceholder.typicode.com/posts`)
    .then((body) => {
      postsData = JSON.parse(body);
      return request(`https://jsonplaceholder.typicode.com/users`);
    })
    .then((body) => {
      usersData = JSON.parse(body);
      return request(`https://jsonplaceholder.typicode.com/comments`);
    })
    .then((body) => {
      commentsData = JSON.parse(body);

      const posts = postsData.map((post) => {
        let author = usersData.filter((user) => user.id == post.userId);
        post.authorName = author[0].name;
        post.createdDate = "July 28, 2021";

        post.comments = commentsData.filter(
          (comment) => comment.postId == post.id
        );
        return post;
      });

      res.json(posts);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
