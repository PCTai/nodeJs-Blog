class NewController {
    // Get /New
    index(req, res) {
        res.render('news');
    }
    show() {
        console.log('hi new');
    }
}

module.exports = new NewController();
