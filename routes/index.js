// imports express
const express = require('express');
// imorts the router module so we can route and export this file
const router = express.Router();

// imports path which allows us to connect our html file
const path = require('path');
const rootDir = require('../utils/path');

const blogData = require('./addBlog');

router.get('/', (req, res, next) => {
    const blogPosts = blogData.blogPosts;
    res.render('index', {
        myPosts: blogPosts,
        pageTitle: 'index in ejs',
        path: '/index'
    });

});

module.exports = router;