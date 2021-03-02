const express = require('express');

const Groups = require('./clients_classes-model');
const restricted = require('../auth/restricted-middleware');

const router = express.Router();

function validRole(role) {
    return((req,res,next) =>{
        if(req.decodedToken.role === role){
            next()
        }else{
            res.status(401).json({message:"Unauthorized Login"})
        }
    })
}

router.get("/", restricted, validRole(1), (req, res) => {
    Groups.find()
    .then(group => {
        res.json(group)
    })
    .catch(err => {
        res.status(500).json({message: "Failed to retrieve class lists"})
    })
})

router.get("/:id", restricted, validRole(1), (req,res) => {
    const { id } = req.params

    Groups.findById(id)
    .then(group => {
        if(group) {
            res.json(group)
        }else {
            res.status(404).json({message:"Could not find class list with given ID"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to retrieve class list"})
    })
})

router.post("/:id", restricted, validRole(1), (req,res) => {
    const attendenceData = req.body

    Groups.addClient(attendenceData)
    .then(group => {
        res.status(201).json(group)
    })
    .catch(err => {
        res.status(500).json({message:"Failed to add client to class"})
    })
})

router.delete("/:id", restricted, validRole(1), (req,res) =>{
    const { id } = req.params
    Groups.removeClient(id)
    .then(deleted => {
        if(deleted){
            res.json({removed: deleted})
        }else {
            res.status(404).json({message:"Could not find class lists with given ID"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to remove client from class"})
    })
})

module.exports = router;