const express = require('express');
const {projects} = require('./data.json');
const app = express();
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    const projectList = projects;
    res.render('index', {projectList})
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/project/:id', (req, res) => {
    const projectId = req.params.id;
    const project = projects.find(({id}) => id === +projectId);
    const projectN = project;
    res.render('project', {projectN});
});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
})