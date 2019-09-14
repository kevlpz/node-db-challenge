const express = require('express');
const Tasks = require('./tasks-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Tasks.get()
        .then(projects => res.status(200).json(projects))
        .catch(err => {
            console.log(err)
            res.status(500).json({error: "Could not retrieve tasks"});
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Tasks.getById(id)
        .then(tasks => res.status(200).json(tasks))
        .catch(err => {
            console.log(err)
            res.status(500).json({error: "Could not retrieve task"});
        });
});

router.post('/', (req, res) => {
    const task = req.body;
    Tasks.insert(task)
        .then(task => res.status(201).json(task))
        .catch(err => {
            console.log(err);
            res.status(500).json({error: "Could not post task"});
        });
});

module.exports = router;