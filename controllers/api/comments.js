const Comment = require('../../models/Comment')

const findOne = async (req, res) => {
    try{
        const comment = await Comment.findOne(req.body)
        res.status(200).json(comment)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
}
const index = async (req, res) => {
    try{
        const comments = await Comment.find({ threadid: req.params.threadid})
        res.status(200).json(comments)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
}

const create = async (req, res) => {
    try{
        const createdComment = await Comment.create(req.body)
        res.status(200).json(createdComment)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
}

const update = async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedComment)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

const remove = async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedComment)
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