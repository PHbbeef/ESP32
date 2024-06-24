var status = 0

var http = require("http"); //创建HTTP对象
const qurystring = require('querystring')

var fs = require("fs");
const { default: test } = require("node:test");

var server = http.createServer(function (request, res) {    //'request'请求对象
    // console.log(request);

    if (request.url === "/Air") {
        res.writeHead(200, {    //HTTP状态码
            //纯文本
            // "Content-Type":"text/plain"
            "Content-Type": 'application/json'
        })

        var Air = {
            status,

        }
        res.end(JSON.stringify(Air));
    }
    else {
        res.writeHead(404, { "Content-Type": 'text/html' });
        fs.createReadStream(__dirname + "/404.html", "utf8").pipe(res);
    }


    if (request.method === 'POST') {
        let postdate = '';
        //流
        request.on('data', chunk => {
            postdate += chunk.toString();
        })
        //监听客户端请求，数据请求完返回数据
        request.on('end',() =>{
            console.log('postdate',postdate);
            res.end('数据接收完毕');
            status = postdate
        })
    
        // console.log('post date', request.headers['content-type']);   //打印请求头

        // console.log(postdate);
    }

})






server.listen(3000, "0.0.0.0");
console.log("服务器端口：3000");

