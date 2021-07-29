const express = require("express");

const { response } = require("express");

const app = express();
const port = 5000;

// set up cors to allow access from local host
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

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

      // add the author name to comment data
      // the email from comment dont match user so append the random name from user db
      commentsData = commentsData.map((comment) => {
        comment.author =
          usersData[Math.floor(Math.random() * usersData.length)].name;

        return comment;
      });

      // add author name, created date, comments to post data before send to front end
      const posts = postsData.map((post) => {
        let author = usersData.filter((user) => user.id == post.userId);
        post.authorName = author[0].name;
        post.createdDate = "July 28, 2021";

        post.comments = commentsData.filter(
          (comment) => comment.postId == post.id
        );

        return post;
      });

      res.send(posts);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
