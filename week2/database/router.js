const express = require('express');
const router = express.Router();
const Developer = require('./controller/developers');
const Team = require('./controller/teams');
const Project = require('./controller/projects');

router.get('/developers', Developer.index);
router.get('/developers/:id', Developer.show);
router.post('/developers', Developer.store);
router.put('/developers/:id', Developer.update)
router.delete('/developers/:id', Developer.delete)

router.get('/teams', Team.index);
router.get('/teams/:id', Team.show);
router.post('/teams', Team.store);
router.put('/teams/:id', Team.update)
router.delete('/teams/:id', Team.delete)

router.get('/projects', Project.index);
router.get('/projects/:id', Project.show);
router.post('/projects', Project.store);
router.put('/projects/:id', Project.update)
router.delete('/projects/:id', Project.delete)

module.exports = router;
