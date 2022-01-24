const express = require('express')
const skillsRouter = express.Router()
const Skill = require('../models/skill')


// INDEX
skillsRouter.get('/', (req, res) => {
  Skill.find({}, (err, skills) => {
    res.json(skills)
  })
})

// CREATE
skillsRouter.post('/', (req, res) => {
  Skill.create(req.body, (err, skill) => {
    res.json(skill)
  })
})


module.exports = skillsRouter