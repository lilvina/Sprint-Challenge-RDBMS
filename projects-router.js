const express = require('express')

const knex = require('knex')
const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)

const router = require('express').Router()

router.get('/', (req, res) => {
  db('projects').then(project => {
    res.status(200).json(project)
  }).catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
  const projectID = req.params.id
  db('projects').where({ id: projectID }).first()
  .then(project => {
    res.status(200).json(project)
  }).catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
  if(!req.body.name) {
    res.status(400).json({ error: 'missing field: name' })
  } else {
    db('projects').insert(req.body)
    .then(ids => {
      const id = ids[0]
      db('projects').where({ id: id}).first()
      .then(project => {
        res.status(201).json(project)
      })
    }).catch(err => res.status(500).json(err))
  }
})

module.exports = router
