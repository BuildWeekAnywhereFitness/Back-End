const express = require('express');

const Instructors = require('./instructor-model');
const restricted = require('../auth/restricted-middleware')

const router = express.Router();

router.get("/", restricted, (req,res) => {
    Instructors.find()
    .then(instructor => {
        res.json(instructor)
    })
    .catch(err => {
        res.status(500).json({message: "Failed to retrieve instructors"})
    })
})

router.get("/:id", restricted, (req,res) => {
    const { id } = req.params

    Instructors.findById(id)
    .then(instructor => {
        if(instructor) {
            res.json(instructor)
        }else{
            res.status(404).json({message: "Could not find instructor with given ID"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to get instructor"})
    })
})

router.post("/", restricted, (req,res) => {
    Instructors.add(req.body)
    .then(([id]) => {
        return Instructors.findById(id)
    })
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(500).json({message:"Failed to create instructor"})
    })
})

router.put("/:id", restricted, (req, res) => {
    Instructors.update(req.params.id, req.body)
    .then(instructor => {
        if(!instructor) {
         res.status(404).json({message:"Could not find instructor with given ID"})
        }else {
            return Instructors.findById(req.params.id)
        }
    })
    .then(updatedInst => {
        res.json(updatedInst)
    })
    .catch(err => {
        res.status(500).json({message:"Failed to update instructor"})
    })
})

router.delete("/:id", restricted, (req,res) => {
    const { id } = req.params

    Instructors.remove(id)
    .then(deleted => {
        if(deleted) {
            res.json({ removed: deleted})
        }else {
            res.status(404).json({message: "Could not find instructor with given ID"})
        }
    })
    .catch(err => {
        res.status(500).json({message:"Failed to delete instructor"})
    })
})

module.exports = router;