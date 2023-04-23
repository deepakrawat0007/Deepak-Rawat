const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const AdSchema = new Schema({
    companyId:{type:mongoose.Types.ObjectId ,ref:'companys' ,required:true},
    primaryText:{type:String , required :true},
    headline:{type:String , required:true},
    description:{type:String},
    CTA:{type:String , required:true},
    image:{type:String , required :true}
})

const Ad = mongoose.model("Ads" , AdSchema)

module.exports = Ad;