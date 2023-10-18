// Cereat server
const express = require('express');
const app = express();

// Connect to db
const mongoose = require("mongoose")
const uri = "mongodb+srv://roaafatani:p2B0O5TZhnDxIkQ6@cluster0.wumgsif.mongodb.net/waaterProject?retryWrites=true&w=majority"

// Import user model
// const UserRecordModel = require('./models/UserRecord')

// app.get('/', (req, res) => {
//     res.json({"users":["Roaa","Afnan","Amjad","summaya"]});
// });

// app.get('/usersrecord', async (req, res) => {
//     const usersrecord = await UserRecordModel.find();
//     res.json(usersrecord)
// });

async function connect() {
    try{
        await mongoose.connect(uri)
        console.log("Connected to mongoDB")
    }catch (error){
        console.error(error);
    }
}

connect();

app.listen(3000,() => {
    console.log("Server started on port 3000")
});
