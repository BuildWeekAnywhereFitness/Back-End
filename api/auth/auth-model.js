const db = require('../../data/db-config')

module.exports = {
    find,
    findByName,
    addInstructor,
    addClient,
    login
}

function find(id, role) {
    if(role === 1) {
        return db("instructors").where("id", id).then(res =>{
            return res[0]
        })
    }else {
        return db("clients").where("id", id).then(res => {
            return res[0]
        })
    }
}

function findByName(username, role) {
    if(role === 1) {
        return db.select("password as password", "username", "id", "role").from("instructors").where("username", username).then(res => {
            return res [0]
        })
    }else {
        return db.select("password as password", "username", "id", "role").from("clients").where("username", username).then(res =>{
            return res[0]
        })
    }
}

function addInstructor(user) {
    return db("instructors")
    .insert({ "username": user.username, "password": user.password , "role": user.role})
    .then(res => {
        return findByName(user.username, user.role)
    })
}

function addClient(user) {
    return db("clients")
    .insert({ "username": user.username, "password": user.password, "role": user.role})
    .then(res => {
        return findByName(user.username, user.role)
    })
}

function login(user){}