const express = require('express');
const router = require('express').Router();
const User = require('../models/User');
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
/* 
@route    POST    /api/users
@desc     Register a user 
@access   Public
*/
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required / enter a valid email').isEmail(),
    check('password', 'Enter a password with 6 or more characters').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
      user = new User({
        name,
        email,
        password,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      res.send('User saved to MongoDB');
    } catch (e) {
      console.log(e.message);
      res.send(500).send('Server Error...')
    }
  }
);

module.exports = router;
