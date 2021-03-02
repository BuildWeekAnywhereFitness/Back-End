
exports.seed = function(knex) {
  return knex("locations").insert([
    {
      location:"Weight City Beach",
      date:"3/5/2021",
      startTime:"8:30 a.m."
    },
    {
      location:"Calm Minds Studio",
      date:"3/4/2021",
      startTime:"10:00 a.m."
    },
    {
      location:"9 Mile Park",
      date:"3/3/2021",
      startTime:"3:00 p.m."
    },
    {
      location:"Death Mountain Trail",
      date:"3/8/2021",
      startTime:"5:00 a.m." 
    }
  ]);
};