const Thread = require('../../models/Thread')

const findOne = async (req, res) => {
    try{
        const thread = await Thread.findOne(req.body)
        console.log(thread)
        res.status(200).json(thread)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
}

const index = async (req, res) => {
    try{
        const threads = await Thread.find({})
        res.status(200).json(threads)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
}

const create = async (req, res) => {
    try{
        const createdThread = await Thread.create(req.body)
        res.status(200).json(createdThread)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
}

const update = async (req, res) => {
    try {
        const updatedThread = await Thread.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedThread)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

const remove = async (req, res) => {
    try {
        const deletedThread = await Thread.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedThread)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

module.exports={
    index,
    create,
    update,
    remove,
    findOne
}