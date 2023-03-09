//Fedir4lapy1hvost,

// mongodb+srv://Denys:<password>@cluster0.p4dr4y4.mongodb.net/test

const mogoose = require("mongoose");

const DB_HOST = "mongodb+srv://Denys:Fedir4lapy1hvost@cluster0.p4dr4y4.mongodb.net/online_shop?retryWrites=true&w=majority"


mogoose.connect(DB_HOST)
    .then(() => console.log("Database connect"))
    .catch(error => {
        console.log(error.message);
        process.exit(1);
});