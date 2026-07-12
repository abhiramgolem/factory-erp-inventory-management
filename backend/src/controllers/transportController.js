const pool = require('../config/db');

exports.getTransports = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM transport_agency_master ORDER BY id'
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

exports.createTransport = async (req, res) => {
    try {
        const {
            agency_name,
            phone,
            address
        } = req.body;

        const result = await pool.query(
            `
            INSERT INTO transport_agency_master
            (agency_name, phone, address)
            VALUES ($1, $2, $3)
            RETURNING *
            `,
            [agency_name, phone, address]
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

exports.updateTransport = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            agency_name,
            phone,
            address
        } = req.body;

        const result = await pool.query(
            `
            UPDATE transport_agency_master
            SET
                agency_name = $1,
                phone = $2,
                address = $3
            WHERE id = $4
            RETURNING *
            `,
            [agency_name, phone, address, id]
        );

        res.json({
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

exports.deleteTransport = async (req, res) => {
    try {
        const { id } = req.params;

        await pool.query(
            'DELETE FROM transport_agency_master WHERE id = $1',
            [id]
        );

        res.json({
            success: true,
            message: 'Transport agency deleted successfully'
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};