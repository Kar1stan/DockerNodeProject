const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    res.statusCode = 200;
    console.log(`Server is running on http://${host}:${port}`);
    res.end('Docker Node Project!\n');
});