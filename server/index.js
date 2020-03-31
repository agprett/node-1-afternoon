const express = require('express')
const getProduct = require('./getProduct')

const app = express()
const PORT = 3000

app.get('/api/products', getProduct.products)
app.get('/api/products?price', getProduct.getProducts)
app.get('/api/products/:id', getProduct.getProduct)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))