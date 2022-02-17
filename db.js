const mongoose = require("mongoose");

const url =
  "mongodb+srv://pra-tik_06:pratik123@cluster0.nwcyp.mongodb.net/quora?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};