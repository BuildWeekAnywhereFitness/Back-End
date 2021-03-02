const express = require('express');

const Class = require('./classes-model');
const restricted = require('../auth/restricted-middleware');

const router = express.Router()

function validRole(role) {
    return((req,res,next) =>{
        if(req.decodedToken.role === role){
            next()
        }else{
            res.status(401).json({message:"Unauthorized Login"})
        }
    })
}

router.get("/", restricted, (req,res) => {
    Class.find()
    .then(classes => {
        res.json(classes)
    })
    .catch(err => {
        res.status(500).json({message: "Failed to retrive classes"})
    })
});

router.get("/:id", restricted, (req,res) => {
    const { id } = req.params;

    Class.findById(id)
    .then(classes => {
        if(classes) {
            res.json(classes)
        }else{
            res.status(404).json({message: "Could not find class with given ID"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to retrieve classes"})
    })
});

router.post("/", restricted, validRole(1), (req,res) => {
    Class.add(req.body)
    .then(([id]) => {
        return Class.findById(id)
    })
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(500).json({message:err.message})
    })
});

router.put("/:id", restricted, validRole(1), (req,res) => {
    Class.update(req.params.id, req.body)
    .then(classes => {
        if(!classes) {
         res.status(404).json({message: "Could not find class with given ID"})
        }else{
            return Class.findById(req.params.id)
        }
    })
    .then(updatedClass => {
        res.json(updatedClass)
    })
    .catch(err =>{
        res.status(500).json({message: "Failed to update class"})
    })
})

router.delete("/:id", restricted, validRole(1), (req,res) => {
    const { id } = req.params

    Class.remove(id)
    .then(deleted => {
        if(deleted) {
            res.json({removed:deleted})
        }else{
            res.status(404).json({message: "Could not find class with given ID"})
        }
    })
    .catch(err => {
        res.status(500).json({message:"Failed to delete class"})
    })
});


module.exports = router;