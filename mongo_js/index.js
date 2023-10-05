const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1";

const client = new MongoClient(uri);


const main = async () => {
  try {
    await client.connect();
    const db = client.db('shop');
    const collection = db.collection("products");
    

    // Await the result of the toArray() method
    const data = await collection.find({ price: { $eq: 3466} }).toArray();

    // Use an asynchronous console.log() function
    console.log(data);

    return "done";
  } catch (e) {
    console.error(e);
  } finally {
    client.close();
  }
};

main().then(console.log).catch(console.error);

    
