const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
// middle wares
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Laptop Zone server is running now ");
});

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.hmvlxc6.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



function run() {
  try {
    const categoriesCollection = client.db('laptop-zone').collection('category');

    const productCollection = client.db('laptop-zone').collection('laptop-product');
   
    app.get('/category', async (req,res) => {

      const query = {};
      const categories = categoriesCollection.find(query);    
      const result = await categories.toArray();
      res.send(result)

   });
   app.get('/ResellProducts', async (req,res) => {

    const query = {};
    const Products = ResellProductsCollection.find(query);    
    const ResellProduct = await ResellProducts.toArray();
    res.send(ResellProduct)

 });
    
  } finally {
  }
}
run();

app.listen(port, () => {
  console.log(" server in running : ", { port });
});
module.exports = app; 