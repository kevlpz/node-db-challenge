const express = require('express');
const Resources = require('./resources-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Resources.get()
        .then(resource => res.status(200).json(resource))
        .catch(err => {
            console.log(err);
            res.status(500).json({error: "Could not retrieve resources"});
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Resources.getById(id)
        .then(resource => res.status(200).json(resource))
        .catch(err => {
            console.log(err);
            res.status(500).json({error: "Could not retrieve resource"});
        });
});

router.post('/', (req, res) => {
    const resource = req.body;
    console.log('resource', resource);
    Resources.insert(resource)
        .then(resource => res.status(201).json(resource))
        .catch(err => {
            console.log(err);
            res.status(500).json({error: "Could not post resource"})
        })
})

module.exports = router