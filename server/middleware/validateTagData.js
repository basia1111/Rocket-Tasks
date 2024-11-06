const validateTagData = (req, res, next) => {
    const { name, color } = req.body;

    if (!name || typeof name !== 'string') {
        return res.status(400).json({ message: 'name is required' });
    }
    if (!color || typeof color !== 'string') {
        return res.status(400).json({ message: 'color is required' });
    }
    next();
};

module.exports = validateTagData;
