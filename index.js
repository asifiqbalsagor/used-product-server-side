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