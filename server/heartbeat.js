exports.heartbeat;

//心跳检测单片机状态
var apiAir = 10

function apiAirheartbeat(){
    setInterval(function(){
        apiAir --
    },1000)
    console.log(apiAir)
}
