const getSettings = (req, res) => {
    try {
        return res.json({
            success: true,
            data: req.user?.userData
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

module.exports = {
    getSettings
}; 