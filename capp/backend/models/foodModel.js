const mongoose = require('mongoose')

const Schema = mongoose.Schema

const foodSchema = new Schema({
   food: { type: String },
   quantity: { type: Number, required: 0<=50 },
   isOrganic: { type: Boolean, default: false },
   category: {type:String, enum:['Dairy', 'Vegetables', 'Proteins', 'Grains','Fruits' 	]
,price:{type:Number},
calories:{type:Number},
bought:{type:Boolean, default:false}},
user:{type:String, required: true}
   
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food

// Project will be a grocery List
// Index will be sorted by category
// Only logged in users can see their own list. Otherwise will see a register page.
// Create new model for second food list
// Click List 1 will show 
// Use .filter for bought properety 
// Show Price list and items bought in main index page 