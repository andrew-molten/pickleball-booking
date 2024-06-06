/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('courts').del()
  await knex('courts').insert([
    { id: 1, shaded: true },
    { id: 2, shaded: true },
    { id: 3, shaded: false },
    { id: 4, shaded: false },
  ])
}
