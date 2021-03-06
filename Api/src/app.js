const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { conn } = require("./db.js");
const app = express();
const routes = require("./routes.js");
const { LoadData } = require("./Loaders/runServerData");

const { executeComand } = require("./config/addData.js");
//Middlewares

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res, next) => {
  const allowedOrigins = [
    "https://your-job-seven.vercel.app",
    "http://localhost:3000",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.header("Access-Control-Allow-Origin", "https://your-job-seven.vercel.app");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", routes);

// // Error catching endware.

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

const deleteDB = false;

app.listen(process.env.PORT || 3001, () => {
  console.log("Server listening on port 3001!");
  conn.sync({ force: false }).then(() => LoadData(deleteDB));

  // executeComand(deleteDB); //llena la Bd si deleteDB= true
});

// app.use(require("./Routes/index"));

module.exports = app;
