const Tag = require('../models/tag')
const Task= require('../models/task')

const FindTagByIdAndCeckOwnership = async(tagId, userId) => {
    const tag = await Tag.findById(tagId);
    if(!tag) throw new Error("Tag not found")
    if(tag.user.toString() !== userId) throw new Error("That's not your tag")
    return tag
}
const getallTags = async(req, res) => {

    try {
        const tags = await Tag.find({user: req.user.id})
        return res.status(200).json(tags)
    } catch(err) {
        return res.status(500).json({message: err.message})
    }
}

const createTag = async(req, res) => {
    const { name, color } = req.body
    console.log(color)
    const tag = new Tag({name, color, user: req.user.id})

    try {
        const savedTag = await tag.save()
        return res.status(201).json(savedTag)
    } catch(err) {
        return res.status(500).json({message: err.message})
    }
}

const UpdateTag = async(req, res) => {
    const { id } = req.params
    const { name, color } = req.body
    try {
        await FindTagByIdAndCeckOwnership(id, req.user.id);
        const updatedTag = await Tag.findByIdAndUpdate(
        id, 
        { name, color },
        { new: true, runValidators: true })
        res.status(200).json(updatedTag)
    } catch(err) {
        return res.status(err.message==="That's not your tag" ? 401 : 500).json({message: err.message})
    }
}
const deleteTag = async(req, res) => {
    const { id } = req.params
    try {
        await FindTagByIdAndCeckOwnership(id, req.user.id);
        const deletedTag = await Tag.findByIdAndDelete(id)
        const tasks = await Task.find({user: req.user.id})
        for (let task of tasks){
            if(task.tags.includes(id)){
                task.tags = task.tags.filter(t => t !== id)
                await task.save()
            }
        }

        res.status(200).json(deletedTag)
    } catch(err) {
        return res.status(err.message==="That's not your tag" ? 401 : 500).json({message: err.message})
    }
 
}

module.exports = {
    getallTags,
    createTag,
    UpdateTag,
    deleteTag
}