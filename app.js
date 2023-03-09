//Fedir4lapy1hvost,

// mongodb+srv://Denys:<password>@cluster0.p4dr4y4.mongodb.net/test

const mogoose = require("mongoose");

const DB_HOST = require("./config");


mogoose.connect(DB_HOST)
    .then(() => console.log("Database connect"))
    .catch(error => {
        console.log(error.message);
        process.exit(1);
});