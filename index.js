const express = require("express");
const router = require("./router");

const dotenv = require("dotenv");
const mongoose = require("mongoose");

const cors = require("cors");

const PORT = 3000;
const app = express();


dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);


app.listen(PORT, '0.0.0.0', () => {
  console.log(`my node api service is running !!!`);
});
