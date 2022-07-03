const express = require('express')
const router = express.Router()
const gameCtrl = require('../../controllers/api/games')


router.get('/', gameCtrl.index)
router.post('/', gameCtrl.create)
router.put('/:id', gameCtrl.update)
router.delete('/:id', gameCtrl.remove)

module.exports = router