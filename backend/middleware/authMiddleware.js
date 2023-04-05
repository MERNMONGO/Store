const jwt = require('jsonwebtoken')

const Food = require('../models/foodModel')


async function authorize(req, res, next) {

    try {
        // 1. Check if req has token in it
        let token = req.header("Authorization") 

        if (!token) { 
            throw new Error('No token provided')
        }

        token = token.replace("Bearer ", "") 

        // 2. Check to see if token still works or is still valid

        const payload = jwt.verify(token, process.env.JWT_SECRET)

        if (payload.error) {
            throw new Error(payload.error)
        }

        // 3. Payload which comes from token will attach to our req object

        req.id = payload.id
        req.user = payload.user

        

        next()

    } catch(err) {
        console.log(err)
        res.status(403).json({ error: err.message })
    }
}

async function confirmUserAccess(req, res, next) {
    try {
        let document;
        if (req.baseUrl.includes('foods')) { 
            document = await Food.findOne({ _id: req.params.id, user: req.user })
        } 
        if (!document) {
            throw new Error('User did not create this document')
        }
        next()
    } catch(err) {
        res.status(403).json({ error: err.message })
    }
}

module.exports = {
    authorize,
    confirmUserAccess
}