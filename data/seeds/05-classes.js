
exports.seed = function(knex) {
  return knex("classes").insert([
    {
      name:"Weight Class",
      type:"Weight Lifting",
      level:"Intermediate",
      duration:"2 hours",
      classSize:"50",
      attendees:"26",
      location:1
    },
    {
      name:"Inner Peace",
      type:"Yoga",
      level:"Beginner",
      duration:"1 hour",
      classSize:"20",
      attendees:"14",
      location:2
    },
    {
      name:"Running Wild",
      type:"Cardio",
      level:"Intermediate",
      duration:"3 hours",
      classSize:"35",
      attendees:"30",
      location:3
    },
    {
      name:"Ultimate Training",
      type:"Crossfit",
      level:"Expert",
      duration:"4 hours",
      classSize:"25",
      attendees:"3",
      location:4
    }
  ]);
};
