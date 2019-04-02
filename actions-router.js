const express = require('express')

const knex = require('knex')
const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)

const router = require('express').Router()

router.get('/', (req, res) => {
  db('actions').then(action => {
    res.status(200).json(action)
  }).catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
  if(!req.body.notes || !req.body.description || !req.body.project_id) {
    res.status(400).json({ error: 'missing name/description'})
  } else {
    db('actions').insert(req.body)
    .then(action => {
      res.status(201).json(action)
    }).catch(err => res.status(500).json(err))
  }
})

module.exports = router
