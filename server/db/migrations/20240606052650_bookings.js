/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('bookings', (table) => {
    table.integer('id').primary()
    table.integer('court_id')
    table.integer('user_id')
    table.date('date')
    table.time('start_time')
    table.time('end_time')
    table.boolean('gear_rental')
    table.decimal('price', 5, 2)
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
