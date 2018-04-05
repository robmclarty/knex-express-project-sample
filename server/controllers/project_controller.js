'use strict'

const { Project, User } = require('../models')

const postProjects = (req, res, next) => {
  const userId = req.params.id
  const props = req.body.project

  Project.create({ ...props, user_id: userId })
    .then(project => res.json({
      ok: true,
      message: 'Project created',
      project,
      userId
    }))
    .catch(next)
}

const getProjects = (req, res, next) => {
  const userId = req.params.id

  Project.findAll()
    .then(projects => res.json({
      ok: true,
      message: 'Projects found',
      projects,
      userId
    }))
    .catch(next)
}

const getProject = (req, res, next) => {
  const projectId = req.params.id

  Project.findById(projectId)
    .then(project => res.json({
      ok: true,
      message: 'Project found',
      project
    }))
    .catch(next)
}

const putProject = (req, res, next) => {
  const projectId = req.params.id
  const props = req.body.project

  Project.update(projectId, props)
    .then(project => res.json({
      ok: true,
      message: 'Project updated',
      project
    }))
    .catch(next)
}

const deleteProject = (req, res, next) => {
  const projectId = req.params.id

  Project.destroy(projectId)
    .then(deleteCount => res.json({
      ok: true,
      message: 'Project deleted',
      deleteCount
    }))
    .catch(next)
}

module.exports = {
  postProjects,
  getProjects,
  getProject,
  putProject,
  deleteProject
}
