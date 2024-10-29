const Task = require('../models/task');

const checkIfTaskExists = async (req, res, next) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        
        next();
    } catch (err) {
        res.status(500).json({ message: 'Server error while looking up task', error: err.message });
    }
};

module.exports = checkIfTaskExists;
