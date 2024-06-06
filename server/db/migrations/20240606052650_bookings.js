/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('bookings', (table) => {
    table.integer('id').primary()
    table.integer('court_id')
    table.integer('user_id')
    table.string('date')
    table.string('start_time')
    table.string('end_time')
    table.boolean('gear_rental')
    table.string('price')
    table.boolean('paid')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('bookings')
}
