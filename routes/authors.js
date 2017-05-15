var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', (req, res) => {
    knex('author').then(data => {
        res.json(data);
    });
});

module.exports = router;
