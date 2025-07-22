const express = require('express');

module.exports = function ({ ADMIN_USER, ADMIN_PASSWORD }) {
  const router = express.Router();

  function ensureRole(role) {
    return (req, res, next) => {
      if (req.session.userRole === role) {
        next();
      } else {
        res.redirect('/');
      }
    };
  }

  router.get('/', (req, res) => {
    res.render('login');
  });

  router.post('/login', (req, res) => {
    const { user, password } = req.body;
    if (user === 'guest') {
      req.session.userRole = 'guest';
      res.redirect('/guest');
    } else if (user === ADMIN_USER && password === ADMIN_PASSWORD) {
      req.session.userRole = 'admin';
      res.redirect('/admin');
    } else {
      res.render('login', { error: 'Credenciales incorrectas' });
    }
  });

  router.get('/admin', ensureRole('admin'), (req, res) => {
    res.render('admin', { user: ADMIN_USER });
  });

  router.get('/guest', ensureRole('guest'), (req, res) => {
    res.render('guest');
  });

  router.get('/logout', (req, res) => {
    req.session.destroy(() => {
      res.redirect('/');
    });
  });

  return router;
};
