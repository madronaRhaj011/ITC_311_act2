const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');

app.use('/', indexRoute);
app.use('/', aboutRoute);
app.use('/', contactRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
