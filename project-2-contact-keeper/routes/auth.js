const express = require('express');
const router = require('express').Router();
const User = require('../models/User');
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
/* 
@route    GET    /api/auth
@desc     Get logged in user 
@access   Private
*/
router.get(
  '/',
  [
    check('email', 'add valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid creds' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid creds' });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          // expiresIn: 3600
          expiresIn: 3600000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (e) {
      console.log(e.message);
      res.status(500).send('Server Error');
    }
  }
);

/* 
@route    POST    /api/auth
@desc     Auth user & get jwt token  
@access   Public
*/
router.post('/', (req, res) => {
  res.post('Log in user');
});

module.exports = router;
