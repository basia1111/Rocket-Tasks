const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    toggleTaskStatus
} = require('../controllers/taskControler');
const validateId = require('../middleware/validateId');
const validateTaskData = require('../middleware/validateTaskData');
const checkIfTaskExists = require('../middleware/checkIfTaskExists');
const protect = require('../middleware/auth')

router.get('/', protect, getAllTasks);

router.post('/', protect, validateTaskData, createTask);

router.put('/:id', protect, validateId, checkIfTaskExists, validateTaskData, updateTask);

router.delete('/:id', protect, validateId, checkIfTaskExists, deleteTask);

router.put('/status/:id', protect, validateId, checkIfTaskExists, toggleTaskStatus);

module.exports = router;
