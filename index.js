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
    
   
   
  } finally {
  }
}
run();

app.listen(port, () => {
  console.log(" server in running : ", { port });
});
module.exports = app; 