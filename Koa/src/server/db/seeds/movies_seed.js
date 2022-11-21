/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex("movies").insert([
    {
      name: "John wick",
      genre: "Fantasy",
      rating: 7,
      explicit: false,
    },
    {
      name: "Avengers",
      genre: "Science Fiction",
      rating: 9,
      explicit: true,
    },
  ]);
};
