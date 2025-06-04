const settingsController = (req, res) => {
    try {
        return res.json(req.user?.userData);
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = settingsController
