const http = require('http');
const url = require('url');
const querystring = require('querystring');
//USAR UN MODULO DE NODEJS DONDE TRAE TODOS LOS PAISES EN JSON
const { countries } = require('countries-list');

let server = http.createServer((req, resp) => {
    let parsed = url.parse(req.url)
    console.log('PARSED::', parsed)

    let pathname = parsed.pathname;
    console.log("pathname::",pathname)
    
    let query = querystring.parse(parsed.query)
    console.log('QUEERY::', query)
    
    if (pathname === "/") {
        resp.writeHead(200, {"Content-type" : "text/html"})
        resp.write("<html lang='en'><body> <p>HOME PAGE</p></body></html>")
        resp.end()
    } else if (pathname === "/country" && parsed.query != null) {
        //EXAMPLE:http://localhost:8090/country?code=EU
        resp.writeHead(200,  {"Content-type" : "application/json"})
        resp.write(JSON.stringify(countries[query.code]))
        resp.end()
    } else {
        resp.writeHead(404, {"Content-type" : "text/html"})
        resp.write("<html lang='en'><body> <p>NOT FOUND</p></body></html>")
        resp.end()
    }
})
server.listen(8090)
console.log('Server en el puerto::8090') 