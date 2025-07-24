const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'gabo-secret',
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, '..', 'data', 'images')));

const ADMIN_USER = 'gabriel';
const ADMIN_PASSWORD = process.env.ADMIN_PASS || 'admin';

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter({ ADMIN_USER, ADMIN_PASSWORD }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
