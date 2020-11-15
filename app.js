const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config({ path: "./config/.env" });
const bodyParser = require("body-parser");
const mongodb = require("./util/database");
const TextRoutes = require("./routes/textpost");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
mongodb();
app.use("/api/text-post", TextRoutes);

const PORT = process.env.PORT || 3000;
app.listen(
    PORT,
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT} in ${process.env.HOST}.`)
);
