
exports.seed = function(knex) {
  return knex("instructors").insert([
    {
      id:1,
      username:"SwoleMeathead",
      password:"gains",
      role:1
    },
    {
      id:2,
      username:"WiiFitTrainer",
      password:"yoga",
      role:1
    },
    {
      id:3,
      username:"CalLories",
      password:"cardio",
      role:1
    },
    {
      id:4,
      username:"MaxTreme",
      password:"crossfit",
      role:1
    }
  ]);
};