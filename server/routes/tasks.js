const express = require('express');
const router = express.Router();
const Task = require('../models/task'); 
const validateTask = require('../middleware/validateTask');

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json(tasks); 
    } catch (err) {
        return res.status(500).json({ message: err.message }); 
    }
});

router.post('/', async (req, res) => {
    const { title, note, dueDate } = req.body;
    const task = new Task({ title, note, dueDate, status: false });

    try {
        const savedTask = await task.save();
        return res.status(201).json(savedTask); 
    } catch (err) {
        return res.status(500).json({ message: err.message }); 
    }
});

router.put('/:id', validateTask, async (req, res) => {
    const { title, note, dueDate } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, { title, note, dueDate }, { new: true, runValidators: true });
        return res.status(200).json(updatedTask);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.delete('/:id', validateTask, async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        return res.status(200).json(deletedTask);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.put('/status/:id', validateTask, async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);
        const updatedTask = await Task.findByIdAndUpdate(id, { status: !task.status }, { new: true, runValidators: true });
        return res.status(200).json(updatedTask);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

module.exports = router;


router.put('/status/:id', validateTask, async(req, res) => {
    const {id} = req.params

    try {
        const task =  await Task.findById(id)
        const updatedTask =  await Task.findByIdAndUpdate(id, {status: !task.status},  { new: true, runValidators: true })
        return res.status(200).json(updatedTask);
    } catch(err) {
        return res.status(500).json({message: err.message});
    }
})

module.exports = router; 
