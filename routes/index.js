const express = require('express');
const router =express.Router();

const {projects} = require('../data.json');


//Home route
router.get('/', (req, res) => {
    const projectList = projects;
    res.render('index', {projectList})
});


//Route for about page
router.get('/about', (req, res) => {
    res.render('about')
});


//Route for projects with catch for projects not in database
router.get('/project/:id', (req, res) => {
    const projectId = req.params.id;
    const project = projects.find(({id}) => id === +projectId);
    console.log(project);
    const projectN = project;
    if (project) {
        res.render('project', {projectN});
    } else {
        const err = new Error('Project Not Found');
        err.status = 404;
        req.next(err);
    }

});

module.exports = router;