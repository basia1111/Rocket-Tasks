const validateTagData = (req, res, next) => {
    const { name } = req.body;

    if (!name || typeof name !== 'string') {
        return res.status(400).json({ message: 'Title is required' });
    }
    next();
};

module.exports = validateTagData;
