const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// NewsController.index
router.use('/:slug', siteController.show);
router.use('/', siteController.index);

module.exports = router;
