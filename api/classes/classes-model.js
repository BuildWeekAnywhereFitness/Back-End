const db = require("../../data/db-config");

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

function find() {
    return db("classes")
    // .join("locations")
    // .select("location", "date", "startTime")
}

function findById(id) {
    return db("classes").where("id", id).first()
    // .join("locations")
    // .select("location", "date", "startTime")
}

function add(classData) {
    return db("classes").insert(classData, "id")
}

function update(id, classes) {
    const classId = id
    return db("classes").where("id",id).update(classes)
    .then(() => {
        return("classes").where("id", classId).first()
    })
}

function remove(id) {
    return db("classes").where("id", id).del()
    .then(() => {
        return db("classes")
    })
}