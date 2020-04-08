//npm install express --save
const express = require('express');
//npm i countries-list
const { countries, languages } = require('countries-list');
 
//aplicacion express
const app = express();

app.get('/', (req,resp) => {
    resp.status(200).send("HELLO")
})

//PARA MAPEAR LOS QUERYS QUE SE MANDAN POR URL "/COUNTRY?QUERY=MX" ES:
app.get('/country', (req, resp) => {
    console.log("REQUEST.QEURY", req.query)
    if(req.query.code != null)
        resp.json(countries[req.query.code])
    else
        resp.json(countries)
})

//PARA MAPEAR LOS PARAMETROS QUE SE MANDAN POR URL "/COUNTRY/PARAM" ES:
app.get('/lenguages/:lang', (req, resp) => {
    console.log("REQUEST.QUERY", req.params)
    const lang = languages[req.params.lang]
    if(lang)
        resp.json(lang)
    else
        resp.status(404).json({
            status : "NOT FOUND",
            message : "lenguage"+req.params.lang+" not found."
        })
})

/**
 * PARA CUALQUIERA OTRA ¡RUTA QUE NO ESTE MAPEADO
 * ++RECORDAR QUE ESTE METODO VA HASTA EL FINAL
 * ++SI IMPORTA EL ORDEN.
**/
app.get('*', (req, resp) => {
    resp.status(404).send("NOT FOUND")
})



app.listen(8090, () =>{
    console.log("Running in port ::: 8090")
});