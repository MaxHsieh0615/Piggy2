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
  console.log(req.body);
  let { title, description, budget, job_status, job_owner } = req.body;
  let errors = [];

  // Validate Fields
  if (!title) {
    errors.push({ text: 'Please add a title' });
  }
  if (!description) {
    errors.push({ text: 'Please add a description' });
  }
  // if(!job_status) {
  //   errors.push({ text: 'Open or Closed' });
  // }
  if (!job_owner) {
    errors.push({ text: 'Enter a job owner' });
  }

  // Check for errors
  if (errors.length > 0) {
    res.render('add', {
      errors,
      title,
      description,
      budget,
      job_status,
      job_owner
    });
  } else {
    if (!budget) {
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

  Job.findAll({
    where:
    {
      title: { [Op.like]: '%' + term + '%' },
      description: { [Op.like]: '%' + term + '%' }
    }
  })
    .then(jobs => res.render('jobs', { jobs }))
    .catch(err => console.log(err));
});

//Edit jobs
router.get('/edit/:id', (req, res) => {
  // console.log(req.params.id);
  // res.send(req.params.id);
  Job.findOne({
    where:
    {
      id: req.params.id
    }
  })
    .then(jobs => {
      console.log(jobs.dataValues);
      var jobInfo = jobs.dataValues;
      res.render('edit', { job: jobInfo })
    })
    .catch(err => console.log(err));



});
// PUT route for updating todos. We can get the updated todo data from req.body
router.put("/edit/:id", function (req, res) {
  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update
  console.log(req.params.id);
  db.Job.update({
    title: req.body.title,
    description: req.body.description,
    budget: req.body.budget,
    job_status,
    job_owner
  }, {
      where: {
        id: req.body.id
      }
    }).then(function (jobUpdate) {
      res.json(jobUpdate);
    });
});

module.exports = router;