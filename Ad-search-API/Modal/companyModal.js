const mongoose = require("mongoose");

const Schema = mongoose.Schema

const CompanySchema = new Schema({
    name:{type:String , required:true},
    url:{type:String , required :true}
},{timestamps:true})

const Company = mongoose.model("Companys", CompanySchema)

module.exports = Company;