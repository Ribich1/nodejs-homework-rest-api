const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Yevhen:QzOoDlnZHbiRP0Tx@cluster0.oheb2op.mongodb.net/db-contacts?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);

const dotenv = require("dotenv");

dotenv.config({
  path: "./.env",
});
const port = process.env.PORT || 3001;
console.log("port123", port);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running. Use our API on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
