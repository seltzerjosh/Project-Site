const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.use('/static', express.static('public'));

//setup main route
const mainRoutes = require('./routes');

//use main route before routing through errors
app.use(mainRoutes);

//setup error routing
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

//global error handler
app.use((err, req, res, next)=>{
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);
});

//open port
app.listen(3000, () => {
    console.log('Server listening on port 3000');
})