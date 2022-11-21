const { urlencoded } = require("express");
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

// app.use("/", (req, res) => {
//   res.send("hello from the express");
// });

app.post("/login", (req, res) => {
  res.send();
});

//get request

app.get("/getdata", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    var getting = JSON.parse(data);
    console.log(getting.data);

    res.send(getting.data);
  });
});


//post request

app.post("/postdata", (req, res) => {
  const obj = req.body;

  fs.readFile("./db.json", "utf-8", (err, data) => {
    var post = JSON.parse(data);

    post.data = [...post.data, obj];

    fs.writeFile("./db.json", JSON.stringify(post), "utf-8", () => {
      //   res.end("ended");
    });
  });
  res.send("data added");
});


//updating the db.json
//read-> find -> delete -> push ->read
app.put("/put/:id", (req, res) => {
  const { id } = req.params;
  const obj = req.body;
//   console.log(id, "params");
  fs.readFile("./db.json", "utf-8", (err, data) => {
    var post = JSON.parse(data);
    var index;
    let user = post.data.find((el, i) => {
      index = i;
      return el.id == id;
    });
    user.name = obj.name;
    post.data.splice(index, 1);
    post.data.push(user);
    // post.data = [...post.data];

    fs.writeFile("./db.json", JSON.stringify(post), "utf-8", () => {
      res.end("ended");
    });
  });
  res.send("data updated");
});

app.listen(8080, () => {
  console.log("server in started on port 8080");
});
