const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Child = require('../models/Child');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Display Children
router.get('/child', (req, res) => 
  Child.findAll()
  .then(child => res.render('child', {
      child
    }))
  .catch(err => console.log(err))
);

// Display add child form
router.get('/addchild', 
    (req, res) => res.render('addChild'));

// Add a child
router.post('/addchild', (req, res) => {
  let { child_name, piggy } = req.body;
  let errors = [];

  // Validate Fields
  if(!child_name) {
    errors.push({ text: 'Please add a child name' });
  }

  // Check for errors
  if(errors.length > 0) {
    res.render('addchild', {
      errors,
      child_name, 
      piggy
    });
  } else {
    if(!piggy) {
      piggy = 'Unknown';
    } else {
      piggy = `$${piggy}`;
    }

    // Insert into table
    Child.create({
      child_name,
      piggy,
    })
      .then(child => res.redirect('/child/child'))
      .catch(err => console.log(err));
  }
});


module.exports = router;