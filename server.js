require("dotenv").config()
let http = require("http")
let express = require("express");
let app = express();
app.use(express.json());
let mongoose = require("mongoose");
const routes = require("./routes");

//tamplate engine
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("index")
});

// routes
app.use("/v1", routes);

// db connection
mongoose.connect(process.env.DB_URL).then(() => {
    console.log("database connect success");
}).catch(() => {
    console.log(error, "database connected error");
})

// create server
http.createServer(app).listen(process.env.PORT, () => {
    console.log(`server stated ${process.env.PORT}`);
})