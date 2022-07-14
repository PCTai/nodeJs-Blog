class SiteController {
    // Get /New
    index(req, res) {
        res.render('search');
    }
    show() {
        console.log('search');
    }
}

module.exports = new SiteController();
