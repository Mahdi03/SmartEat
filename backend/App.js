const express = require('express'); //npm install express
const PORT = process.env.PORT || 5000;
const path = require("path");
const bcrypt = require('bcrypt'); //used to hash passwords
const app = express();
//npm install ejs
app.engine('html', require('ejs').renderFile); //Used to render HTML - npm install html
app.engine('css', require('ejs').renderFile); //Used to render CSS - npm install css
app.use(express.static(__dirname + '/../public')); //Used to find "public" folder outside of folder of this script and serve CSS/JS files

app.use(
    express.urlencoded({
        extended: true
    })
);
app.listen(PORT, () => {
    console.log(`Success, listening on port: ${PORT}`);
});

var ex = "example";