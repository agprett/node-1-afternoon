const express = require('express')
const getProduct = require('./getProduct')

const app = express()
const PORT = 3000

app.get('', getProduct.products)
app.get('/api/products/:id', getProduct.getProduct)
app.get('/api/products', getProduct.getProducts)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))