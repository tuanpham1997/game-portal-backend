const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')

router.post('/', usersCtrl.create)
router.post('/login', usersCtrl.login)
router.get('/:id', usersCtrl.show)
router.put('/:id', usersCtrl.update)
router.delete('/:id', usersCtrl.remove)

module.exports = router