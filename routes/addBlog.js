// import express
const express = require('express');

// imorts the router module so we can route and export this file
const router = express.Router();

// imports the path module so we can join paths and interconnect files
const path = require('path');

// imports our utils folder so we can use the function 
const rootDir = require('../utils/path');

// an array that will collect the products
const blogPosts = [];

router.get('/addBlog', (req, res, next) => {
    res.render('addBlog', {
        pageTitle: 'Add Blog Post',
        path: '/addBlog'
    });
});

router.post('/addBlog', (req, res, next) => {
    blogPosts.push({
        title: req.body.title
    });
    res.redirect('/')
})



exports.routes = router;
exports.blogPosts = blogPosts;