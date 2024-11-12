const Task = require('../models/task');
const User = require('../models/user');

/**
 * Helper function to find task and verify ownership
 */
const findTaskByIdAndCheckOwnership = async (taskId, userId) => {
    const task = await Task.findById(taskId);
    if (!task) throw new Error('Task not found');
    if (task.user.toString() !== userId) throw new Error("That's not your task");
    return task;
};

/**
 * @desc    Retrieve all tasks for a specific user
 * @route   GET /tasks
 * @access  Private
 */
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id }).populate('tags');
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/**
 * @desc    Create a new task
 * @route   POST /tasks
 * @access  Private
 */
const createTask = async (req, res) => {
    const { title, dueDate, tags } = req.body;
    const task = new Task({ title, dueDate, user: req.user.id, status: false, tags });

    try {
        const savedTask = await task.save();
        const populatedTask = await Task.findById(savedTask._id).populate('tags');
        res.status(201).json(populatedTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/**
 * @desc    Update a task by ID
 * @route   PUT /tasks/:id
 * @access  Private
 */
const updateTask = async (req, res) => {
    const { title, dueDate, tags } = req.body;
    const { id } = req.params;

    try {
        await findTaskByIdAndCheckOwnership(id, req.user.id);

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, dueDate, tags},
            { new: true, runValidators: true }
        ).populate('tags');
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(err.message === "That's not your task" ? 401 : 500).json({ message: err.message });
    }
};

/**
 * @desc    Delete a task by ID
 * @route   DELETE /tasks/:id
 * @access  Private
 */
const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        await findTaskByIdAndCheckOwnership(id, req.user.id);
        
        const deletedTask = await Task.findByIdAndDelete(id);
        res.status(200).json(deletedTask);
    } catch (err) {
        res.status(err.message === "That's not your task" ? 401 : 500).json({ message: err.message });
    }
};

/**
 * @desc    Toggle the status of a task by ID
 * @route   PUT /tasks/status/:id
 * @access  Private
 */
const toggleTaskStatus = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await findTaskByIdAndCheckOwnership(id, req.user.id);

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { status: !task.status },
            { new: true, runValidators: true }
        ).populate('tags');
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(err.message === "That's not your task" ? 401 : 500).json({ message: err.message });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
};
