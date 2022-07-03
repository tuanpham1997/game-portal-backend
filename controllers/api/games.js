const Game = require('../../models/Game')

const index = async (req, res) => {
    try{
        const games = await Game.find({})
        res.status(200).json(games)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
}

const create = async (req, res) => {
    try{
        const createdGame = await Game.create(req.body)
        res.status(200).json(createdGame)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
}

const update = async (req, res) => {
    try {
        const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedGame)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

const remove = async (req, res) => {
    try {
        const deletedGame = await Game.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedGame)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

module.exports={
    index,
    create,
    update,
    remove
}