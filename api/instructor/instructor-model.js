const db = require('../../data/db-config');

module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove,
};

function find() {
    return db("instructors").select("id", "username").orderBy("id");
}

function findBy(filter) {
    return db("instructors").where(filter).orderBy("id");
}

function findById(id) {
    return db("instructors").where("id", id).first();
}

async function add(client) {
    const [id] = await db("instructors").insert(client, "id");
    return findById(id);
}

function update(id, client) {
    const instructorId = id
    return db("instructors").where("id", id).update(client)
    .then(() => {
        return db("instructors").where("id", instructorId).first()
    })
}

function remove(id) {
    return db("instructors").where("id", id).del()
    .then(() => {
        return db("instructors")
    })
}