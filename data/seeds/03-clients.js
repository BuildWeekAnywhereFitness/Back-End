

exports.seed = function(knex) {
  return knex("clients").insert([
    {
      id:1,
      username:"SaulLazy",
      password:"couch",
      role:2
    },
    {
      id:2,
      username:"JanFirst",
      password:"newme",
      role:2
    },
    {
      id:3,
      username:"BenTold",
      password:"torun",
      role:2
    },
    {
      id:4,
      username:"IvannaPuke",
      password:"letsgo",
      role:2
    }
  ]);
};