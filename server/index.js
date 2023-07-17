const express = require('express');
const route = require('./Route/Route');
const cors = require('cors');

const index = express()
index.use(express.json())
index.use(express.urlencoded({ extended: true }));
index.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','POST'],
    allowedHeaders:['Content-Type', 'Authorization']
}))

index.use(route)



index.listen(9002,()=>{
console.log("Server is running on port 9002");
})