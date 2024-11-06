const express = require('express')
const router  = express.Router()
const {
    getallTags,
    createTag,
    UpdateTag,
    deleteTag
} = require('../controllers/tagController')
const protect = require('../middleware/auth')
const validateId = require('../middleware/validateId')
const validateTagData = require('../middleware/validateTagData')

router.get('/',protect, getallTags)
router.post('/',protect, validateTagData, createTag)
router.put('/:id',protect, validateId, validateTagData, UpdateTag)
router.delete('/:id',protect, validateId, deleteTag)


module.exports = router