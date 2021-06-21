const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const router = require("./routes");

/*CONFIGURACIONES*/

app.set("port", 3001);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(app.get("port"), () => {
  console.log("Server status 200 on port 3000");
});
