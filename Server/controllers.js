const client = require('./database')
const {documentById,getAllDocuments,insertDocument,deleteDocument,updateDocument}= require('./utils');


exports.allTodo = async (req,res)=>{
    const {completed} = req.query
    const allTodo = await getAllDocuments(client);
    const data = (completed === undefined ) ? allTodo : allTodo.filter((todo)=> (todo.completed));
    res.send(data)
}



exports.getTodoById = async (req ,res)=>{
   const {id} = req.params;
   console.log(id);
   const data = await documentById(client,id)
   res.send(data)
}


exports.addTodo = async (req,res)=>{
    const newTodo = await insertDocument(client,req.body)
    res.send(newTodo)
}

exports.deleteTodo = async (req,res)=>{
    const {id} = req.params;
   const deletedTodo = await deleteDocument(client,id)
    res.send(deletedTodo)
}

exports.updateTodo = async (req,res)=>{
    const {id} = req.params;
    const updateTodo = await updateDocument(client,id,req.body)
    res.send(updateTodo)
}