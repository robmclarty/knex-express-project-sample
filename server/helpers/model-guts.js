'use strict'

// The guts of a model that uses Knexjs to store and retrieve data from a
// database using the provided `knex` instance. Custom functionality can be
// composed on top of this set of common guts.
//
// The idea is that these are the most-used types of functions that most/all
// "models" will want to have. They can be overriden/modified/extended if
// needed by composing a new object out of the one returned by this function ;)
module.exports = ({
  knex = {},
  name = 'name',
  tableName = 'tablename',
  selectableProps = [],
  timeout = 1000
}) => {
  const create = props => knex.insert(props)
    .into(tableName)
    .timeout(timeout)

  const findAll = () => knex.select()
    .from(tableName)
    .timeout(timeout)

  const find = filters => knex.select(selectableProps)
    .from(tableName)
    .where(filters)
    .timeout(timeout)

  const findById = id => knex.select(selectableProps)
    .from(tableName)
    .where({ id })
    .timeout(timeout)

  const update = props => knex.update(props)
    .from(tableName)
    .where({ id: props.id })
    .timeout(timeout)

  const destroy = id => knex.del()
    .from(tableName)
    .where({ id })
    .timeout(timeout)

  return {
    name,
    tableName,
    selectableProps,
    timeout,
    create,
    findAll,
    find,
    findById,
    update,
    destroy
  }
}
