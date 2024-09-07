const http = require("http");

const host = '0.0.0.0';
const port = 8000;

const server = http.createServer((req,res) => {
    res.statusCode =200;
    res.setHeader("Content-Type","text/plain")
    res.end("Docker Node Project")
});

server.listen(port,host, ()=>{
    console.log('Server running at http://${hostname}:${port}/')
})