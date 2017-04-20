var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
const reformate = require('../functions/duplicate').reformate;

router.get('/', (req, res, next) => {
    knex('book')
        .select(
            'book.id as book_id',
            'book.title',
            'book.genre',
            'book.description',
            'book.cover_url',
            'author.id as author_id',
            'author.first_name',
            'author.last_name')
        .join('book_author', 'book_author.book_id', 'book.id')
        .join('author', 'author.id', 'book_author.author_id')
        .then(data => {
            const reformatted = reformate(data);
            res.json(reformatted)
        });
});

router.get('/:id', (req, res, next) => {
    knex('book')
        .select(
            'book.id as book_id',
            'book.title',
            'book.genre',
            'book.description',
            'book.cover_url',
            'author.id as author_id',
            'author.first_name',
            'author.last_name')
        .join('book_author', 'book_author.book_id', 'book.id')
        .join('author', 'author.id', 'book_author.author_id')
        .where('book_id', req.params.id)
        .then(data => {
            const reformatted = reformate(data);
            res.json(reformatted)
        });
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
        knex('book')
            .select(
                'book.id as book_id',
                'book.title',
                'book.genre',
                'book.description',
                'book.cover_url',
                'author.id as author_id',
                'author.first_name',
                'author.last_name')
            .join('book_author', 'book_author.book_id', 'book.id')
            .join('author', 'author.id', 'book_author.author_id')
            .where('book_id', req.params.id)
            .update({
                title: req.body.title,
                genre: req.body.genre,
                description: req.body.description,
                cover_url: req.body.cover_url,
            }, 'id').then(data => {
                const reformatted = reformate(data);
                res.json(reformatted)
            });

});

module.exports = router;
