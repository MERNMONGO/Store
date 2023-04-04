const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

async function register(req, res) {

    try {
        // 1. Check if user already exists
        const foundUser = await User.findOne({ username: req.body.username })

        if (foundUser) {
            return res.status(400).json({ error: 'User already exists' })
        }
        
        // 2. If they don't, encrypt their password, encrypt for them, careful of salt

        const intensity = await bcrypt.genSalt(10)
       
        const genPass = await bcrypt.hash(req.body.password, intensity) 
        
        // 3. Add new user to database with password encrypted

        const newUser = await User.create({ ...req.body, password: genPass })
        
        // 4. Generate a JWT token and return it to user

        const payload = { id: newUser._id, user: newUser.username }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 5000000 })
        
        res.status(200).json({ token }) 
    } catch(err) {
        console.log(err)
        res.status(400).json({ error: err.message })
    }
}

async function login(req, res) {

    try {
        // Checks to see if there is a user

        const foundUser = await User.findOne({ username: req.body.username })

        if (!foundUser) {
            return res.status(404).json({ error: 'User not found' })
        }

        // 2. Compares password to real one

        const validPass = await bcrypt.compare(req.body.password, foundUser.password)

        if (!validPass) {
            return res.status(400).json({ error: 'Please try to enter Password' })
        }

        // 3. JWT token is made and attached to user

        const payload = { id: foundUser._id, user: foundUser.username }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 50000000})

        res.status(200).json({ token }) 

    } catch(err) {
        console.log(err)
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    register,
    login
}