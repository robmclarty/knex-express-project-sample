'use strict'

const { User, Project } = require('../../server/models')

exports.seed = knex => knex(Project.tableName).del()
  .then(() => User.findAll())
  .then(users => {
    if (users.length <= 0) throw 'No users found'

    return users[0].id
  })
  .then(userId => [
    {
      user_id: userId,
      name: 'Sample Project',
      description: 'This is just a sample project to create some data to look at.'
    },
    {
      user_id: userId,
      name: 'Another Project',
      description: 'This is another project of sample data.',
      completed_at: knex.fn.now()
    }
  ])
  .then(newProjects => Promise.all(newProjects.map(project => Project.create(project))))
  .catch(err => console.log('err: ', err))
