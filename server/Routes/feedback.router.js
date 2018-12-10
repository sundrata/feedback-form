const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req, res) =>{
    console.log('in post route');
    let feedback = req.body;
    let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2 , $3, $4)`;
    pool.query(queryString, [feedback.feeling, feedback.understanding, feedback.supported, feedback.comments]).then(() => {
        res.send(201);
    }).catch((err) =>{
        res.send(500);
    })
    
})


module.exports = router;