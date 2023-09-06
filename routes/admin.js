const express = require('express');
const router = express.router();
const path = require('path');

const rootDir = require('../util/path');


router.get('/add-product', (req, res, next) => {
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit" tex="Add Product"></button></input></form>');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/admin/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;