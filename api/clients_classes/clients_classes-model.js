const db = require("../../data/db-config");

module.exports = {
    find,
    findById,
    removeClient,
    addClient,
}

function find() {
    return db("clients_classes").select("id").orderBy("id")
}

function findById(id) {
    return db("clients_classes").where("id", id).first()
}

function removeClient(id) {
    return db("clients_classes").where("client_id",id).del()
    .then(() => {
        return db("clients_classes")
    })
}
function addClient(id) {
    return db("clients_classes").insert("client_id",id).where("class_id", id).first()
}

// async function updateClient(client_id, class_id) {
//     return db("clients_classes").where({client_id: client_id}).update({class_id: class_id})
// }

// async function createClient(client_id, class_id) {
//     const classes = await db.find(class_id);
//     return db("clients_classes").insert({client_id: client_id, class_id: classes.id}).returning("*")
// }


// const create = async (user_id, role_id) => {
//     const role = await Role.fetch(role_id);
//     return database("user_roles").insert({user_id: user_id, role_id: role.id}).returning("*");
// }

// const update = async (user_id, role_id) => {
//     const role = await Role.fetch(role_id);
//     return database("user_roles").where({user_id: user_id}).update({
//         role_id: role.id
//     });
// }