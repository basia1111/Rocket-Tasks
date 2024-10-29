const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    toggleTaskStatus
} = require('../controllers/taskControler');
const validateTaskId = require('../middleware/validateTaskId');
const validateTaskData = require('../middleware/validateTaskData');


router.get('/', getAllTasks);

router.post('/', validateTaskData, createTask);

router.put('/:id', validateTaskId, validateTaskData, updateTask);

router.delete('/:id', validateTaskId, deleteTask);

router.put('/status/:id', validateTaskId, toggleTaskStatus);

module.exports = router;
