const schema = require("mongoose").Schema;

module.exports = new schema({
    user: String,
    pass: String,
    name: {
        first: String,
        last: String
    },
    email: String,
    domain: String,
    phone: String
},
    {
        timestamps: true,
        collection: "users"
    });