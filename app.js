const express = require('express');
const app = express();
require('dotenv').config();
const logger = require('./logger/logger');

const port = process.env.PORT;

// Importing the router
const { callBitcoinAPI } =require('./cronjobs/cronjobs')
const InventoryRouter = require('./router/InventoryRouter')

// Using the router middleware
app.use('/api/inventory', InventoryRouter);

callBitcoinAPI();

// Start the server
app.listen(port, () => {
    logger.info(`Server is listening at http://localhost:${port}`);
    console.log(`Server is listening at http://localhost:${port}`);
});
