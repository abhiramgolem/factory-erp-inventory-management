const pool = require('../config/db');

exports.getParties = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM party_master ORDER BY id'
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

exports.createParty = async (req, res) => {
    try {
        const { party_name, phone, address } = req.body;

        const result = await pool.query(
            `
            INSERT INTO party_master
            (party_name, phone, address)
            VALUES ($1, $2, $3)
            RETURNING *
            `,
            [party_name, phone, address]
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

exports.updateParty = async (req, res) => {
    try {
        const { id } = req.params;
        const { party_name, phone, address } = req.body;

        const result = await pool.query(
            `
            UPDATE party_master
            SET party_name = $1,
                phone = $2,
                address = $3
            WHERE id = $4
            RETURNING *
            `,
            [party_name, phone, address, id]
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

exports.deleteParty = async (req, res) => {
    try {
        const { id } = req.params;

        await pool.query(
            'DELETE FROM party_master WHERE id = $1',
            [id]
        );

        res.json({
            success: true,
            message: 'Party deleted successfully'
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};