const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        { id: 1, name: 'Laptop', price: 10 },
        { id: 2, name: 'Mouse', price: 5 },
    ])
})

router.get('/special', (req, res) => {  // je-gula specific, segula uporer dike rakbo,
    const SpecialProduct = {
        name: 'Bokachoda',
        price: 0
    }
    res.json(SpecialProduct)
})

router.get('/:id', (req, res) => {     // common get-request keh nisceh rakbo!
    const productId = Number(req.params.id);

    const products = [
        { id: 1, name: 'Laptop', price: 10 },
        { id: 2, name: 'Mouse', price: 5 }
    ]

    const requestedProduct = products.find( product => product.id === productId)

    if(requestedProduct){
        res.json(requestedProduct)
    } else {
        res.status(404).send('Product not found')
    }
})


router.post('/', (req, res) => {
    const { name, price } = req.body

    const newProduct = {
        name,
        price
    }

    console.log(newProduct)
    res.json({ message: "New Product added", product: newProduct})
})

module.exports = router