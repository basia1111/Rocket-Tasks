const mongoose =  require('mongoose')

const TagSchema = new mongoose.Schema({
    name: {type: String, required: true},
    user:{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }

})

const Tag = mongoose.model('Tag', TagSchema)

module.exports = Tag