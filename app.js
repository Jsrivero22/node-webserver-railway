require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


// Servir contendido estatico
app.use( express.static('public') );

const dataGenerals = {
    name: 'Antonio Salcedo',
    title: 'Curso de Node'
}

app.get('/', ( req, res ) => {

    res.render('home', dataGenerals);
});

app.get('/generic', ( req, res ) => {

    // res.send('Hola mundo en su respectiva ruta');
    // res.sendFile( __dirname + '/public/generic.html');
    res.render('generic', dataGenerals);

});

app.get('/elements', ( req, res ) => {

    // res.send('Hola mundo en su respectiva ruta');
    // res.sendFile( __dirname + '/public/elements.html');
    res.render('elements', dataGenerals);
});

app.get('*', ( req, res ) => {

    // res.send('404 | Page nout found');
    res.sendFile( __dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${ port }`)
  })