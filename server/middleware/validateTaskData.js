const validateTaskData = (req, res, next) => {
    const { title, dueDate } = req.body;

    if (!title || typeof title !== 'string') {
        return res.status(400).json({ message: 'Title is required' });
    }

    if (dueDate) {
        const parsedDate = new Date(dueDate);

        if (isNaN(parsedDate.getTime())) {
            return res.status(400).json({ message: 'Due date must be a valid date.' });
        }
    }
    next();
};

module.exports = validateTaskData;
