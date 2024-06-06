/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.integer('id').primary()
    table.string('auth0_id')
    table.string('given_name')
    table.string('surname')
    table.string('email')
    table.string('phone')
    table.boolean('is_admin')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('users')
}
