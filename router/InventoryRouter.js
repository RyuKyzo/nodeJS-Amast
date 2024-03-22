const express = require('express');
const router = express.Router();
const logger = require('../logger/logger')
// Task 1
router.get('/', (req,res) => {
    return res.send({
        name: "luqman",
        age: 23,
        university: "UiTM Shah Alam",
        hobby: "badminton"
    });
});


//Task 2
router.get('/list', (req,res) => {
    let data = {
        name: 'Football',
        type: 'Sport',
        quantity: 100
    } 
    logger.info({status: 'SUCCESS', data})
    logger.error({status: 'ERROR', errMsg: 'Data not found'})
    return res.send({status: 'SUCCESS', data}) 
})

module.exports = router;