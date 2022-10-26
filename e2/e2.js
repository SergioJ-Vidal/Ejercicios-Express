const express = require("express");

const app = express();

const path = require("path");

const puerto = "3000";

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola The Bridge')
})

app.get('/productos', (req, res) => {
    res.send('listado de productos')
})

app.post('/productos', (req, res) => {
    res.send('crear un producto')
})

app.put('/productos', (req, res) => {
    res.send('actualizar producto')
})

app.delete('/productos', (req, res) => {
    res.send('borrar producto')
})

app.get('/usuarios', (req, res) => {
    res.send('listado usuarios')
})

app.post('/usuarios', (req, res) => {
    res.send('crear usuario')
})

app.put('/usuarios', (req, res) => {
    res.send('actualizar usuario')
})

app.delete('/usuarios', (req, res) => {
    res.send('borrar usuario')
})


app.listen(puerto, () => {

    console.log(`Servidor levantado en el puerto ${puerto}`);

});