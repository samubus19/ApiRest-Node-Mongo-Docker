const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;


mongoose.connect(MONGODB_URI, {
    useUnifiedTopology : true,
    useNewUrlParser : true,
})
.then((db) => {
        console.log('Database is connected');
    }).catch((err) => {
        console.log(err);
    });

mongoose.connection
    .once("open", () => console.log("Connected"))
    .on("error", error => {
        console.log(error);
    });
    