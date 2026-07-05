const express = require('express');
const cors = require('cors');
const pool = require('./config/db');
const driverRoutes = require('./routes/driverRoutes');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/drivers', driverRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'Factory ERP Backend Running'
    });
});

app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');

        res.json({
            success: true,
            database_time: result.rows[0]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});