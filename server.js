const express = require("express");
const colors = require("colors");

let path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, '"index.html"'));
// });
app.use(express.static(path.join(__dirname, 'src')))

app.listen(PORT, function () {
  console.log(colors.rainbow(`App listening on http://localhost:${PORT}`));
});
