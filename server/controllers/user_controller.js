'use strict'

const { User } = require('../models')

const getUsers = () => {
  User.find()
    .then(users => {
      users.forEach(user => console.log('user: ', JSON.stringify(user, null, 2)))

      return users
    })
    .catch(err => console.log('ERROR: ', err))
}

const getUser = id => {
  User.findById(id)
    .then(user => {
      console.log('user: ', user)

      return user
    })
    .catch(err => console.log('ERROR: ', err))
}

const createUser = user => {
  User.create(user)
    .then(user => {
      console.log('created user: ', user)

      return user
    })
    .catch(err => console.log('ERROR: ', err))
}
