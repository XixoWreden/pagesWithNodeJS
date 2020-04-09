//npm install express --save
const express = require('express');
 
//aplicacion express
const app = express();

app.use(express.static(__dirname+'/public/'))
//Folder que estará visualizandopara los componentes staticos de la página
console.log(__dirname+'/public')



const portConnect = 8080

const server = app.listen(portConnect, () =>{
    console.log(`Running in port ::: ${portConnect}`);
});

// server.close();