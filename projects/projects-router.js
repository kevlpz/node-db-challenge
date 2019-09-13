const express = require('express');
const Projects = require('./projects-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => res.status(200).json(projects))
        .catch(err => {
            console.log(err);
            res.status(500).json({error: "Could not retrieve projects"});
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Projects.getProjectById(id)
        .then(project => res.status(200).json(project))
        .catch(err => {
            console.log(err);
            res.status(500).json({error: "Could not retrieve projects"});
        });
});

router.post('/', (req, res) => {
    Projects.insert(req.body)
        .then(something => {
            console.log(something);
            res.end();
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: "Could not insert project"});
        });
});

module.exports = router;