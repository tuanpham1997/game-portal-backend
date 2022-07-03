const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    let token = req.get('Authorization')

    if(token) {
        token = token.replace('Bearer ', '')

        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            req.user = err ? null : decoded.user
            // Expiration
            req.exp = err ? null : new Date(decoded.exp * 1000)
        })
        next()
    } else {
        req.user = null
        next()
    }
}