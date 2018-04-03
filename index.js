'use strict'

const { User } = require('./server/models')

User.create({
  username: 'admin',
  password: 'password',
  email: 'admin@email.com'
})
