const path = require('path');
const express = require('express');
const engine = require('express-handlebars');
var morgan = require('morgan');
const route = require('./routes');

const app = express();
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

app.engine(
    'hbs',
    engine.engine({
        extname: 'hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(3000);
