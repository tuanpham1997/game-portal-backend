const express = require('express')
const router = express.Router()
const threadCtrl = require('../../controllers/api/threads')

router.get('/findone', threadCtrl.findOne)
router.get('/', threadCtrl.index)
router.post('/', threadCtrl.create)
router.put('/:id', threadCtrl.update)
router.delete('/:id', threadCtrl.remove)

module.exports = router