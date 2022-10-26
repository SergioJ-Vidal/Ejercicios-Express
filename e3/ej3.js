const express = require("express");

const app = express();

const puerto = "3000";

app.use(express.json());

const items =
    [
        { id: 1, nombre: 'Taza de Harry Potter', precio: 300 },
        { id: 2, nombre: 'FIFA 22 PS5', precio: 1000 },
        { id: 3, nombre: 'Figura Goku Super Saiyan', precio: 100 },
        { id: 4, nombre: 'Zelda Breath of the Wild', precio: 200 },
        { id: 5, nombre: 'Skin Valorant', precio: 120 },
        { id: 6, nombre: 'Taza de Star Wars', precio: 220 }
    ]

app.get("/products", (req, res) => {
    res.send({ description: "Productos", results: items });
});

app.post("/products", (req, res) => {
    const newItem = {
        id: items.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio,
    }

    if (!req.body.nombre || !req.body.precio) {
        res.status(400).send({ msg: "Please fill all inputs" })
    } else {
        items.push(newItem)
        res.status(201).send({ items })
    }
})

app.put("/products/id/:id", (req, res) => {
    const found = items.some(item => item.id == req.params.id)
    if (found) {
        items.forEach(item => {
            if (item.id == req.params.id) {
                item.nombre = req.body.nombre ? req.body.nombre : item.nombre,
                    item.precio = req.body.precio ? req.body.precio : item.precio
                res.send(item)
            }
        })
    } else {
        res.status(404).send({ msg: `Item con ID ${req.params.id} no encontrado` })
    }
})

app.delete("/products/id/:id", (req, res) => {
    const found = items.some(item => item.id == req.params.id)
    if (found) {
        res.send(items.filter(item => item.id != req.params.id))
    } else {
        res.status(404).send({ msg: `Item con ID ${req.params.id} no encontrado` })
    }
})

//Crear filtro que muestre los productos con un precio entre 50 y 250.

app.get("/products/precio", (req, res) => {
    const found = items.filter(item => (item.precio >= 50 && item.precio < 250))
    if(found){
        res.send(found) 
    } else {
        res.status(404).send({ msg: "Producto en rango de precio no encontrado" })
    }
})

//Crear un filtro que cuando busque en postman por parámetro el id de un producto me devuelva ese producto

app.get("/products/id/:id", (req, res) => {
    const found = items.filter(item => item.id == req.params.id)
    if (found) {
        res.send(found)
    } else {
        res.status(404).send({ msg: `Item con ID ${req.params.id} no encontrado` })
    }
})

//Crear un filtro que cuando busque en postman por parámetro el nombre de un producto me devuelva ese producto

app.get("/products/nombre/:nombre", (req, res) => {
    const found = items.filter(item => item.nombre == req.params.nombre)
    if (found) {
        res.send(found)
    } else {
        res.status(404).send({ msg: `Item con nombre ${req.params.id} no encontrado` })
    }
})

//Crear filtro por precio de producto












app.listen(puerto, () => {

    console.log(`Servidor levantado en el puerto ${puerto}`);

});

