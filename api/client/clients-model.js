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
    return db("clients").select("id", "username").orderBy("id");
}

function findBy(filter) {
    return db("clients").where(filter).orderBy("id");
}

function findById(id) {
    return db("clients").where("id", id).first();
}

async function add(client) {
    const [id] = await db("clients").insert(client, "id");
    return findById(id);
}

function update(id, client) {
    const clientId = id
    return db("clients").where("id", id).update(client)
    .then(() => {
        return db("clients").where("id", clientId).first()
    })
}

function remove(id) {
    return db("clients").where("id", id).del()
    .then(() => {
        return db("clients")
    })
}