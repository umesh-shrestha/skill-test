const mongoose = require("mongoose");

// const databaseConnection = function () {
//     mongoose
//         .connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//             useFindAndModify: false,
//         })
//         .then(() => {
//             console.log("Database connection has been established successfully.");
//         })
//         .catch((err) => {
//             console.error("Unable to established database connection!!!.", err);
//             throw err;
//         });
// };

const databaseConnection = async function () {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });
    console.log(`Database connection has been established successfully.${conn.connection.host}`);
};

module.exports = databaseConnection;
