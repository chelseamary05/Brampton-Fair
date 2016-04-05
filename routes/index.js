var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brampton Fall Fair' });
});
router.get('/about', function(req, res, next) {
    res.render('about', {
        title: 'About the Fair',
    });
});
    router.get('/visit', function(req, res, next) {
    res.render('visit', {
        title: 'visit',
    });
});

router.get('/downloads', function(req, res, next) {
    res.render('downloads', {
        title: 'Download',
    });
});

router.get('/Faq', function(req, res, next) {
    res.render('Faq', {
        title: 'Frequently Asked Questions',
    });
});
router.get('/contact-us', function(req, res, next) {
    res.render('contact-us', {
        title: 'Contact Us',
    });
});
module.exports = router;

//home, about, join the fair info, downloads, Faq, contact, 