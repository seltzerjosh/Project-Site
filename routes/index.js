const express = require('express');
const router =express.Router();

const {projects} = require('../data.json');

router.get('/', (req, res) => {
    const projectList = projects;
    res.render('index', {projectList})
});

router.get('/about', (req, res) => {
    res.render('about')
});

router.get('/project/:id', (req, res) => {
    const projectId = req.params.id;
    const project = projects.find(({id}) => id === +projectId);
    const projectN = project;
    res.render('project', {projectN});
});

module.exports = router;