const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');


let path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());


require('./routing/html-routes.js')(app);


app.listen(PORT, function () {
    (console.log(colors.rainbow(`App listening on http://localhost:${PORT}`)))
});