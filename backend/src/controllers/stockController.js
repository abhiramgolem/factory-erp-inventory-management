const pool = require('../config/db');

exports.getStocks = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM stock_master ORDER BY id'
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

exports.createStock = async (req, res) => {
    try {
        const { stock_name, description } = req.body;

        const result = await pool.query(
            `
            INSERT INTO stock_master
            (stock_name, description)
            VALUES ($1, $2)
            RETURNING *
            `,
            [stock_name, description]
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

exports.updateStock = async (req, res) => {
    try {
        const { id } = req.params;
        const { stock_name, description } = req.body;

        const result = await pool.query(
            `
            UPDATE stock_master
            SET stock_name = $1,
                description = $2
            WHERE id = $3
            RETURNING *
            `,
            [stock_name, description, id]
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

exports.deleteStock = async (req, res) => {
    try {
        const { id } = req.params;

        await pool.query(
            'DELETE FROM stock_master WHERE id = $1',
            [id]
        );

        res.json({
            success: true,
            message: 'Stock deleted successfully'
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};