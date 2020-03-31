const products = require('../products.json')

module.exports = {
  products: (req, res) =>{
    console.log(products)
  },

  getProduct: (req, res) =>{
    const product = products.find(e => {
      return e.id === +req.params.id
    })

    if(product){
      res.status(200).send(product)
    } else {
      res.status(404).send('Product not found')
    }
  },

  getProducts: (req, res) => {
    if(req.query.price) {
      const filteredProducts = products.filter(e => {
        return e.price >= +req.query.price
      })
      res.status(200).send(filteredProducts)
    } else {
      res.status(200).send(products)
    }
  }
} 