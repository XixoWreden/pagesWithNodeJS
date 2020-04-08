//npm install express --save
const express = require('express');
 
//aplicacion express
const app = express();

app.get('/', (req,resp) => {
    resp.status(200).send("HELLO")
})


app.listen(8090, () =>{
    console.log("Running in port ::: 8090");
});