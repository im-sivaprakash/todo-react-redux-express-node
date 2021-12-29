
const mongo = require('mongodb');

const getAllDocuments = async (client)=>{
    await client.connect();
    const res = await client.db("todos").collection("todo").find({}).toArray();
    return res;
}

const documentById = async (client,id)=>{
    await client.connect();
    const res = await client.db("todos").collection("todo").find({"_id" :mongo.ObjectId(id)}).toArray();
    return res;
}

const insertDocument = async (client,data)=>{
    await client.connect();
    const newTodo = await client.db("todos").collection("todo").insertOne(data);
    const res = await client.db("todos").collection("todo").find({"_id" :mongo.ObjectId(newTodo.insertedId)}).toArray();
    return res;
}

const deleteDocument = async (client,id)=>{
    await client.connect();
    const res = await client.db("todos").collection("todo").find({"_id" :mongo.ObjectId(id)}).toArray();
    await client.db("todos").collection("todo").deleteOne({"_id" :mongo.ObjectId(id)});
    return res;
}

const updateDocument = async(client,id,data)=>{
    await client.connect();
    await client.db("todos").collection("todo").update({"_id" :mongo.ObjectId(id)},{"$set":data});
    const res = await client.db("todos").collection("todo").find({"_id" :mongo.ObjectId(id)}).toArray();
    return res;
}

module.exports = {documentById,getAllDocuments,insertDocument,deleteDocument,updateDocument};