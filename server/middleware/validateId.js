const { Types } = require('mongoose');

const validateId = (req, res, next) => {
    const { id } = req.params;

    if (!Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }

    next();
};

module.exports = validateId;
