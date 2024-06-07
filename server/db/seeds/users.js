/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([//google-oauth2|115329107932736690149 // zac
    {
      id: 1,
      auth0_id: 'whatdoesthislooklike',
      given_name: 'little',
      surname: 'pickle',
      email: 'baby.gherkin@gmail.com',
      phone: '00000000',
      is_admin: false,
    },
    {
      id: 2,
      auth0_id: '123456',
      given_name: 'Sour',
      surname: 'Kraut',
      email: 'sauerkraut@fermentation.com',
      phone: '5551234567',
      is_admin: false,
    },
    {
      id: 3,
      auth0_id: 'picklepower789',
      given_name: 'Dill',
      surname: 'Spear',
      email: 'dillyourspears@pickles.com',
      phone: '8885551212',
      is_admin: true,
    },
    {
      id: 4,
      auth0_id: 'saltysnack',
      given_name: 'Salty',
      surname: 'Snack',
      email: 'saltsnacks@saltysnacks.com',
      phone: '1234567890',
      is_admin: false,
    },
    {
      id: 5,
      auth0_id: 'veggiedelight',
      given_name: 'Veggie',
      surname: 'Delight',
      email: 'veggies@healthychoices.com',
      phone: '9876543210',
      is_admin: false,
    },
    {
      id: 6,
      auth0_id: 'spicyjalepeño',
      given_name: 'Spicy',
      surname: 'Jalepeño',
      email: 'spicyj@peppers.com',
      phone: '0123456789',
      is_admin: true,
    },
  ])
}
