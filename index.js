const express = require("express");
const app = express();
const path = require("path");
const public = path.join(__dirname, "public");
app.use(express.static(public));


const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

const router = require("./routes/ guestbookRoutes");
app.use("/", router);  


// app.get("/", function (req, res) {
//   res.send("Hello! Welcome to the guestbook application.");
// });


app.listen(3000, () => {
  console.log("Server started on port 3000. Ctrl^c to quit.");
});
