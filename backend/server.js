const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors")
app.use(cors())
// Load environment variables
const dotenv = require("dotenv");
dotenv.config();

// Body-parser middleware (fixing naming and duplication)
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // You had a typo: bodyparser vs bodyParser

const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

// database name
const dbName = "PassOP";

// Connect to MongoDB
client.connect();

// GET all passwords
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("documents");
  const findResult = await collection.find({}).toArray();

  res.json(findResult);
});

// POST/save a password
app.post("/", async (req, res) => {
    const password=req.body
  const db = client.db(dbName);
  const collection = db.collection("documents");

  // Insert the posted body into MongoDB
  const insertResult = await collection.insertOne(password);

  res.json({ status: "success", insertedId: insertResult.insertedId });
});


// deltet password 
app.delete("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("documents");

  // Insert the posted body into MongoDB
  const insertResult = await collection.deleteOne(password);

  res.json({ status: "success", insertedId: insertResult.insertedId });
});




app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
