const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("got em");
  //   res.status(500).send("broken");
  res.render("index", {
    text: " world",
  });
});

const userRouter = require("./routes/users");

app.use("/users");

app.listen(3000);
