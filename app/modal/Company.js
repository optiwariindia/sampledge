const schema = require("mongoose").Schema;
module.exports = new schema({
    name: String,
    legalName: String,
    type:{
        vendor:Boolean,
        client:Boolean
    },
    address:[{
        tag:String,
        street:String,
        city:String,
        state:String,
        country:String,
        zip:String
    }],
    contact:[
        {
            name:{
                salutation:Enumerator("Mr","Mrs","Ms","Dr"),
                first:String,
                middle:String,
                last:String
            },
            email:String,
            phone:String,
            jobrole:String,
            department:String,
            office:String,
            im:[
                {
                    provider:String,
                    id:String
                }
            ],
            active:Boolean
        }
    ],
    active:Boolean
})