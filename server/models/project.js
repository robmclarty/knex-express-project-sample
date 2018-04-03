'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'Project'
const tableName = 'projects'

const selectableProps = [
  'id',
  'user_id',
  'name',
  'description',
  'completed_at',
  'updated_at',
  'created_at'
]

module.exports = knex => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps
  })

  return {
    ...guts
  }
}
