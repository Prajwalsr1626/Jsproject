const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url==='/home' || req.url === '/'){
        let data = fs.readFileSync('Static/index.html');
        console.log(data);
        res.write(data)
    }
    else if(req.url==='/about'){
        let data = fs.readFileSync('Static/about.html');
        console.log(data);
        
        res.write(data)
    }
    else{
        let data = fs.readFileSync('Static/err.html');
        res.write(data);
    }
    res.end();
}).listen(process.env.PORT, ()=>{console.log("server is  running on port 8083")});