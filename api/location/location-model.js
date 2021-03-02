const db = require("../../data/db-config");

module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove,
}

function find() {
    return db("locations")
}

function findBy(filter) {
    return db("locations").where(filter).orderBy("id");
}

function findById(id) {
    return db("locations").where("id", id).first()
}

function add(location) {
    return db("locations").insert(location, "id")
}

function update(id, location) {
    const locationId = id
    return db("locations").where("id", id).update(location)
    .then(() => {
        return db("locations").where("id", locationId).first()
    })
}

function remove(id) {
    return db("locations").where("id",id).del()
    .then(() => {
        return db("locations")
    })
}