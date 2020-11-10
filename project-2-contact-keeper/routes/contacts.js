const express = require('express');
const router = require('express').Router(); 

/* 
@route    GET    /api/contacts
@desc     Get all User's contacts
@access   Private
*/
router.post('/', (req, res) => {
  res.send('get users contacts');
});

module.exports = router;

/* 
@route    POST    /api/contacts
@desc     Add new contact 
@access   Private
*/
router.post('/', (req, res) => {
  res.send('Add new contact');
});

module.exports = router;


/* 
@route    PUT    /api/contacts
@desc     Update user's contact
@access   Private
*/
router.put('/:id', (req, res) => {
  res.send('update contact');
});

module.exports = router;


/* 
@route    DELETE    /api/contacts
@desc     delete contacts
@access   Private
*/
router.delete('/:id', (req, res) => {
  res.send('delete a given contact');
});

module.exports = router;
