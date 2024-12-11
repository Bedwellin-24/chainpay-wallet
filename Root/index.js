const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const stripeRoutes = require('./src/routes/stripeRoutes');
const paypalRoutes = require('./src/routes/paypalRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Payment routes
app.use('/api/stripe', stripeRoutes);
app.use('/api/paypal', paypalRoutes);

// Root Endpoint
app.get('/', (req, res) => res.send('ChainPay Backend Running'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
