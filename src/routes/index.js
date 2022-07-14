const newRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newRouter);
    app.use('/search', siteRouter);
    app.get('/', function (req, res) {
        res.render('home');
    });
}

module.exports = route;
