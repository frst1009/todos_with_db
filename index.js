const { default: mongoose } = require("mongoose");
const { Schema } = mongoose
const express = require('express');

const app = express();

app.use(express.json())
//E83U1GSN8C5eOnVZ


mongoose.connect('mongodb+srv://ilahaeshu:E83U1GSN8C5eOnVZ@cluster0.ehxhrlt.mongodb.net/frontend');



let productSchema = new Schema({
    todos: {
      type: Array,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  });
let Product = mongoose.model('Product', productSchema)


app.get('/api/todos', (req, res) => {

    Product.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err)
        })

})

app.get('/api/todos/:id', (req, res) => {

    let id = req.params.id;

    Product.findById(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        })

})



app.post('/api/todos', (req, res) => {

    let product = new Product({
        todos: req.body.todos,
        count: req.body.count
    })

    product.save();

    res.json(product);

})







app.listen(3000,()=>{
    console.log('listening');
})
