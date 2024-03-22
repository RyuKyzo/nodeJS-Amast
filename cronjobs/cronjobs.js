const cron = require('node-cron')
const logger = require('../logger/logger')



function callBitcoinAPI(){
    cron.schedule('*/2 * * * * *', async () => {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        const data = await response.json()

        logger.info({
            status:'success',
            data
        })
        console.log({
            status:'success',
            data
        })
    })
}

module.exports = { callBitcoinAPI }