const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


// ROUTE 1: Get All the products using: GET "/api/fetchallproducts".
router.get('/fetchallproducts', async (req, res) => {
    try {
        const productsData = await Product.find();
        res.json(productsData)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new products using: POST "/api/addproduct". Login required
router.post('/addproduct', async (req, res) => {
    try {
        const { name, quantity, } = req.body;
        const product = new Product({ name, quantity })
        const savedProduct = await product.save()
        res.json(savedProduct)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3: Update an existing products using: PUT "/api/updateproduct". Login required
router.put('/updateproduct/:id', async (req, res) => {
    const { name, quantity } = req.body;
    try {
        // Create a newNote object
        const newProducat = {};
        if (name) { newProducat.name = name };
        if (quantity) { newProducat.quantity = quantity };


        // Find the note to be updated and update it
        let product_have_specific_id = await Product.findById(req.params.id);
        if (!product_have_specific_id) {
            return res.status(404).send("Not Found")
        }


        product_have_specific_id = await Product.findByIdAndUpdate(req.params.id, { $set: newProducat }, { new: true })
        res.json({ product_have_specific_id });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 4: Delete an existing product using: DELETE "/api/deleteproduct". Login required
router.delete('/deleteproduct/:id', async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let Deletedproduct = await Product.findById(req.params.id);
        if (!Deletedproduct) {
            return res.status(404).send("Not Found")
        }
        Deletedproduct = await Product.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", Deletedproduct: Deletedproduct });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router