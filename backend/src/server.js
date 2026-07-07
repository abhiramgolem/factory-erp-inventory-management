const express = require('express');
const cors = require('cors');
const pool = require('./config/db');

const driverRoutes = require('./routes/driverRoutes');
const partyRoutes = require('./routes/partyRoutes');
const stockRoutes = require('./routes/stockRoutes');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/drivers', driverRoutes);
app.use('/api/parties', partyRoutes);
app.use('/api/stocks', stockRoutes);

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
        console.error(error);

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