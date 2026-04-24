

const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
 name:String,
 course:String,
 fees:Number,
 type:String
})

module.exports = mongoose.model("Pizza",PizzaSchema)