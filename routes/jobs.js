const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Job = require('../models/Job');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Display List of Jobs
router.get('/', (req, res) => 
  Job.findAll()
    .then(jobs => res.render('jobs', {
        jobs
      }))
    .catch(err => console.log(err)));

// Display add job form
router.get('/add', (req, res) => res.render('add'));

// Add a job
router.post('/add', (req, res) => {
  let { title, description, budget, job_status, job_owner } = req.body;
  let errors = [];

  // Validate Fields
  if(!title) {
    errors.push({ text: 'Please add a title' });
  }
  if(!description) {
    errors.push({ text: 'Please add a description' });
  }
  if(!job_status) {
    errors.push({ text: 'Open or Closed' });
  }
  if(!job_owner) {
    errors.push({ text: 'Enter a job owner' });
  }

  // Check for errors
  if(errors.length > 0) {
    res.render('add', {
      errors,
      title, 
      description,  
      budget, 
      job_status,
      job_owner
    });
  } else {
    if(!budget) {
      budget = 'Unknown';
    } else {
      budget = `$${budget}`;
    }

    // Insert into table
    Job.create({
      title,
      description,
      budget,
      job_status,
      job_owner
    })
      .then(job => res.redirect('/jobs'))
      .catch(err => console.log(err));
  }
});

// Search for jobs
router.get('/search', (req, res) => {
  let { term } = req.query;

  // Make lowercase
  term = term.toLowerCase();

  Job.findAll({ where: 
      { title: { [Op.like]: '%' + term + '%' }, 
        description: { [Op.like]: '%' + term + '%' } 
      } 
    })
    .then(jobs => res.render('jobs', { jobs }))
    .catch(err => console.log(err));
});

module.exports = router;