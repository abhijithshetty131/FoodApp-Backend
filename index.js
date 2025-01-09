const express = require("express");
const userRoute = require("./routes/userRoutes");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const envFile = `.env.${process.env.NODE_ENV || "development"}`;
dotenv.config({ path: path.resolve(__dirname, `../.env.${envFile}`) });
dotenv.config({ path: path.resolve(__dirname, "../.env") });

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const app = express();
const PORT = 8000;
const uri = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoute);

mongoose.connect(uri).then(() => console.log("mongodb connected"));

app.listen(PORT, () => {
  console.log(process.env.ENVNAME);
  console.log(`Server started at port:${PORT} - ${process.env.ENVNAME}`);
});
