const Task = require('../models/task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json(tasks);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const createTask = async (req, res) => {
    const { title, dueDate } = req.body;
    const task = new Task({ title, dueDate, status: false });

    try {
        const savedTask = await task.save();
        return res.status(201).json(savedTask);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const updateTask = async (req, res) => {
    const { title, dueDate } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { title, dueDate },
            { new: true, runValidators: true }
        );
        return res.status(200).json(updatedTask);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        return res.status(200).json(deletedTask);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const toggleTaskStatus = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { status: !task.status },
            { new: true, runValidators: true }
        );
        return res.status(200).json(updatedTask);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    toggleTaskStatus
};
