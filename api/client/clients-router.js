const express = require('express')
const router = express.Router();

const Clients = require('./clients-model');
const restricted = require('../auth/restricted-middleware');
 
function validRole(role) {
    return((req,res,next) =>{
        if(req.decodedToken.role === role){
            next()
        }else{
            res.status(401).json({message:"Unauthorized Login"})
        }
    })
}

router.get("/", restricted, validRole(1), (req,res) =>{
    Clients.find()
    .then(clients =>{
        res.status(200).json(clients)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
});

router.get("/:id", restricted, validRole(1), (req,res) => {
    const { id } = req.params

    Clients.findById(id)
    .then(client => {
        if(client) {
            res.json(client)
        }else {
            res.status(404).json({message: "Could not find client with given ID"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to retrieve client"})
    })
})

router.put("/:id", restricted, (req,res) => {
    Clients.update(req.params.id, req.body)
    .then(client => {
        if(!client) {
        res.status(404).json({message:"Could not find client with ID"})
        }else{
            return Clients.findById(req.params.id)
        }
    })
    .then(updatedClient => {
        res.json(updatedClient)
    })
    .catch(err => {
        res.status(500).json({message: "Failed to update client"})
    })
})

router.delete("/:id", restricted, (req,res) => {
    const { id } = req.params

    Clients.remove(id)
    .then(deleted => {
        if(deleted) {
            res.json({removed: deleted})
        }else{
            res.status(404).json({message: "Could not find client with given ID"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to delete client"})
    })
})

module.exports = router;