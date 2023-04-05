const Foods = require('../models/foodModel')





module.exports.index = async (req, res) => {
    const foods = await Foods.find({user:req.user})
    res.json(foods)
}

module.exports.create = async (req, res) => {
    try {
        const food = await Foods.create(req.body)
        res.json(food)
    } catch(err) {
        res.json({ error: err.message })
    }
}

module.exports.show = async (req, res) => {
   
    const food = await Foods.findById(req.params.id)
    res.json(food)
}


module.exports.edit = async (req, res) => {
    const updatedFood = await Foods.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updatedFood)
}


module.exports.delete = async (req, res) => {

    await Foods.findByIdAndDelete(req.params.id)
   
  
    res.json({ message: 'deleted' })
}

module.exports.deleteAll = async (req, res) => {

    await Foods.deleteMany({})
   
  
    res.json({ message: 'deleted' })
}







