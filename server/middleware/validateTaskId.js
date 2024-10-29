const Task = require('../models/task');
const mongoose = require('mongoose');

const validateTaskId = async (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid id property' });
    }

    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = validateTaskId;
