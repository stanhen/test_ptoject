const jwt = require('jsonwebtoken')
const User = require('../utils/model/user')
//Gives an idea of the user access level
const authData = async (req, res, next) => {
    try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, process.env.SECRET_AUTH)
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })   
     if (!user) {
        req.authDataPosition = false
     } else {
        req.authDataPosition = true
     }
        next()
    } catch (e) {
        req.authDataPosition = false
        next()
    }
}

module.exports = authData