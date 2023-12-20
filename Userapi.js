const http= require("http")
const fs = require("fs");
const server =http.createServer((req, res)=>{
    if (req.url =="/"){
        res.end("hello from home")
    } else if(req.url == "/user"){
        fs.readFile(`${__dirname}/user.json`,
        "utf-8",
        (err,data)=>{
        console.log(data);
        res.end(data)

        });
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1> 404 erroe pages doesnot ");
    }
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");

});