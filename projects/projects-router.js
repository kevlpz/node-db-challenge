const express = require('express');
const Projects = require('./projects-model.js');
const router = express.Router();

// get projects
router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => res.status(200).json(projects))
        .catch(err => {
            console.log(err);
            res.status(500).json({error: "Could not retrieve projects"});
        });
});

// get project
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Projects.getProjectById(id)
        .then(project => res.status(200).json(project))
        .catch(err => {
            console.log(err);
            res.status(500).json({error: "Could not retrieve projects"});
        });
});

// post project
router.post('/', (req, res) => {
    Projects.insertProject(req.body)
        .then(project => res.status(201).json(project))
        .catch(err => {
            console.log(err);
            res.status(500).json({error: "Could not insert project"});
        });
});

module.exports = router;