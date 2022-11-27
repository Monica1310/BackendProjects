/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex("persons").del();
  await knex("persons").insert([
    {
      name: "Moni",
      email: "moni@gmail.com",
      age: "25",
    },
    { name: "abi", email: "abi@gmail.com", age: "27" },
    { name: "rashmi", email: "rashmi@gmail.com", age: "28" },
  ]);
};
