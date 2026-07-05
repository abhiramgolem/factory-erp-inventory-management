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

exports.createDriver = async (req, res) => {
    try {
        const {
            driver_name,
            phone,
            vehicle_number
        } = req.body;

        const result = await pool.query(
            `
            INSERT INTO driver_master
            (driver_name, phone, vehicle_number)
            VALUES ($1, $2, $3)
            RETURNING *
            `,
            [driver_name, phone, vehicle_number]
        );

        res.status(201).json({
            success: true,
            data: result.rows[0]
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};