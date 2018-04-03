'use strict'

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
  const create = props => knex.insert(props)
    .into(tableName)
    .timeout(1000)

  const findAll = () => knex.select()
    .from(tableName)
    .timeout(1000)

  const find = filters => knex.select(selectableProps)
    .from(tableName)
    .where(filters)
    .timeout(1000)

  const findById = id => knex.select(selectableProps)
    .from(tableName)
    .where({ id })
    .timeout(1000)

  const update = props => knex.update(props)
    .from(tableName)
    .where({ id: props.id })
    .timeout(1000)

  const destroy = id => knex.del()
    .from(tableName)
    .where({ id })
    .timeout(1000)

  return {
    name,
    tableName,
    create,
    findAll,
    find,
    findById,
    update,
    destroy
  }
}
