const mongoos = require("mongoose");

const RecordSchema = new mongoos.Schema({
    name : {
        type: String,
    },

    age : {
        type:Number,
    }
})

const UserRecordModel = mongoos.model("usersRecords", RecordSchema)
module.exports = UserRecordModel