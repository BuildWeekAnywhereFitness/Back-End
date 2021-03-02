
exports.seed = function (knex) {
  return knex("roles").insert([
    {
      name: "instructor", // id 1
    },
    {
      name: "client", // id 2
    }
  ]);
};