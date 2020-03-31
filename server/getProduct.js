const products = require('../products.json')

module.exports = {
  products: (req, res) =>{
    res.status(200).send(products)
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
        const items = products.filter(e => e.price >= +req.query.price)
        return res.status(200).send(items)
    }
    res.status(200).send(products)
  }
} 