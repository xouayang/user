const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors())
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: 100000, extended: true }));

const uri =
  "mongodb+srv://xouayang20:xouayang20@cluster0.w0su1.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("success");
  });
require("./src/routes/user.routes.js")(app);
const port = 2000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
