const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');
const todoRouter = require('./router');

const app = express();

app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({ extended: true})); 
app.use(morgan('default'));
app.use(cors());

app.use('/api/todo',todoRouter);


app.use('*',(req,res)=>{
    res.status(404).json({
        message : `${req.url} Not Found , Try /api/` 
    })
})


app.listen(8000,()=>{
    console.log("server is up at port : 8000");
})