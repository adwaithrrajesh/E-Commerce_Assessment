const productModel = require('../model/productModel');

module.exports = {
  insertProduct: async (req, res) => {
    const products = req.body;
    const productDocument = new productModel({
      products: products,
    });

    try {
      const savedProduct = await productDocument.save();
      console.log('Data inserted successfully:', savedProduct);
      res.status(200).json(savedProduct); // You can send a response to the client if needed.
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Error inserting data' }); 
    }
  },
};
