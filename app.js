// imports express
const express = require('express');
// creates the express app 
const app = express();

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

// sereve static files (like the css)
app.use(express.static(path.join(__dirname, 'public')));


//parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

 // imports our admin route
 const blogData = require('./routes/addBlog');
 //imports our shop route
 const indexRoutes = require('./routes/index');

 app.use(blogData.routes);
 app.use(indexRoutes);

app.use((req, res, next) => { //
    res.status(404).render('404', {
        pageTitle: "404"
    });
});

app.listen(8080);