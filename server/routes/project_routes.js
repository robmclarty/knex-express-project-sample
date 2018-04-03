'use strict'

const router = require('express').Router()
const {
  postProjects,
  getProjects,
  getProject,
  putProject,
  deleteProject
} = require('../controllers/project_controller')

router.route('/users/:id/projects')
  .post(postProjects)
  .get(getProjects)

router.route('/projects/:id')
  .get(getProject)
  .put(putProject)
  .delete(deleteProject)

module.exports = router
