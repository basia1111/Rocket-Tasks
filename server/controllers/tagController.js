const Tag = require('../models/tag')

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
    const { name } = req.body
    const tag = new Tag({name, user: req.user.id})

    try {
        const savedTag = await tag.save()
        return res.status(201).json(savedTag)
    } catch(err) {
        return res.status(500).json({message: err.message})
    }
}

const UpdateTag = async(req, res) => {
    const { id } = req.params
    const { name } = req.body
    try {
        await FindTagByIdAndCeckOwnership(id, req.user.id);
        const updatedTag = await Tag.findByIdAndUpdate(
        id, 
        { name },
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