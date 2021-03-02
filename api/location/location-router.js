const express = require('express');
const restricted = require('../auth/restricted-middleware')
const Locations = require('./location-model');

const router = express.Router();

router.get("/", restricted, (req,res) => {
    Locations.find()
    .then(location => {
        res.json(location)
    })
    .catch(err => {
        res.status(500).json({message: "Failed to retrieve locations"})
    })
})

router.get("/:id", restricted, (req,res) => {
    const { id } = req.params
    Locations.findById(id)
    .then(location => {
        if(location) {
            res.json(location)
        }else{
            res.status(404).json({message: "Could not find location with given ID"})
        }
    })
    .catch(err => {
        res.status(500).json({message:"Failed to get locaations"})
    })
})

router.post("/", restricted, (req,res) => {
    Locations.add(req.body)
    .then(([id]) => {
        return Locations.findById(id)
    })
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(500).json({message:err.message})
    })
})

router.put("/:id", restricted, (req,res) => {
    Locations.update(req.params.id, req.body)
    .then(location => {
        if(!location) {
        res.status(404).json({message: "Could not find location with given ID"})
        }else{
            return Locations.findById(req.params.id)
        }
    })
    .then(updatedLocation => {
        res.json(updatedLocation)
    })
    .catch(err => {
        res.status(500).json({message:"Failed to update location"})
    })
})

router.delete("/:id", restricted, (req, res) => {
    const { id } = req.params

    Locations.remove(id)
    .then(deleted => {
        if(deleted) {
            res.json({removed: deleted})
        }else{
            res.status(404).json({message: "Could not find location with given ID"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to delete location"})
    })
})

module.exports = router;