const express = require('express')
const router = express.Router()
const commentCtrl = require('../../controllers/api/comments')

router.get('/findone', commentCtrl.findOne)
router.get('/', commentCtrl.index)
router.post('/', commentCtrl.create)
router.put('/:id', commentCtrl.update)
router.delete('/:id', commentCtrl.remove)

module.exports = router