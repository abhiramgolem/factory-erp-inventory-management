const pool = require('../config/db');

exports.getDrivers = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM driver_master ORDER BY id'
        );

        res.json(result.rows);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};