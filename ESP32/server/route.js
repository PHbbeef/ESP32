var status = 1;
var Air = 0;

module.exports = route_url

var http = require("http");
const qurystring = require('querystring')
var fs = require("fs");

function route_url(){
    server.listen(3000,"0.0.0.0");

    var server = http.createServer(function(request,res){
        console.log(request.url);
        route_url();
    
        if(request.url === "/Air"){
            res.writeHead(200,{
                //纯文本
                // "Content-Type":"text/plain"
                "Content-Type":'application/json'
            })
        
            var Air = {
                status
            }
            res.end(JSON.stringify(Air));
        }
        else{
            res.writeHead(404,{"Content-Type":'text/html'});
            fs.createReadStream(__dirname+"/404.html","utf8").pipe(res);
        }
    })
}

