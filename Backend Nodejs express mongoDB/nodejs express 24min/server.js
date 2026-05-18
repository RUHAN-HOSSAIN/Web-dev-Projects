const cors = require('cors');
const express = require('express');

// 8.1
const productsRouter = require('./products')

const app = express()

// cors for ->  5. Connect backend with frontend
app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))

app.use(express.json());



// 2. Define routes
app.get('/', (req, res) => {
    res.send('Hello from express!')
})

app.get('/about', (req, res) => {
    res.send('This is the about page')
})


// 3. return JSON format data to the browser
// app.get('/products', (req, res) => {
//     res.json([
//         { id: 1, name: 'Laptop', price: 10 },
//         { id: 2, name: 'Mouse', price: 5 },
//     ])
// })

// // 4. Define a route with a parameter
// app.get('/products/:id', (req, res) => {
//     const productId = Number(req.params.id);

//     const products = [
//         { id: 1, name: 'Laptop', price: 10 },
//         { id: 2, name: 'Mouse', price: 5 }
//     ]

//     const requestedProduct = products.find( product => product.id === productId)

//     if(requestedProduct){
//         res.json(requestedProduct)
//     } else {
//         res.status(404).send('Product not found')
//     }
// })

// or make separate file for that
// 8.2 Express router
app.use('/products', productsRouter)



// 5. Connect backend with frontend
app.get('/message', (req, res) => {
    res.json({ message: 'Hi, this is a JSON response!' })
})

// 7. Post Routes
app.post('/message', (req, res) => {
    // const name = req.body.name;
    // const message = req.body.message;

    const { name, message } = req.body;

    console.log("New message,", name + ":", message);
    res.json({ message: 'Thank you for your message'})
})

app.listen(3000, () => {
    console.log('The server is running on port 3000...')
})