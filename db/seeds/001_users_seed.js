'use strict'

const { User } = require('../../server/models')

exports.seed = knex => knex(User.tableName).del()
  .then(() => [
    {
      username: 'admin',
      password: 'password',
      email: 'admin@email.com'
    },
    {
      username: 'first-user',
      password: 'another-password',
      email: 'first-user@email.com'
    }
  ])
  .then(newUsers => Promise.all(newUsers.map(user => User.create(user))))
  .catch(err => console.log('err: ', err))
