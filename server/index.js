const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();

const router = require("./routes");

/*CONFIGURACIONES*/

app.set("port", 3001);
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  expressSession({
    secret: "yoursecret",
    cookie: { secure: false },
    resave: false,
    saveUninitialized: false,
  })
);

app.use(router);

app.listen(app.get("port"), () => {
  console.log(`Server status 200 on port ${app.get("port")}`);
});
