const express = require("express");
const bodyParser = require("body-parser"); // name属性で値を取得できる。Express4.16以降は要らないらしい。
const cors = require("cors"); // なんかよくわからんけどセキュリティのやつ https://developer.mozilla.org/ja/docs/Web/HTTP/CORS
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json()); //Express4.16以降 app.use(express.json()) https://expressjs.com/ja/api.html#req.body
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); //Express4.16以降 app.use(express.urlencoded({ extended: true }))

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});