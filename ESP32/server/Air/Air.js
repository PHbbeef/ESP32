var status_on = 0; //0(关)、1(开)、2（停止红外）
var url_Air = "http://server.drlihui.eu.org:80/apiAir"

function an(){
    if(status_on == 1){
        status_on = 0
    }
    else{
        status_on = 1
    }

    let xhr = new XMLHttpRequest()
    xhr.open('post',url_Air)
    xhr.send(status_on)
}

function anan(){

    //POST响应
    let xhr = new XMLHttpRequest()
    xhr.open('post',url_Air)
    xhr.send(3)


    //GET请求
    // xhr_get = new XMLHttpRequest()
    // xhr_get.open('get','url_Air',false)
    // xhr_get.send()

    //设置事件
    xhr.onreadystatechange = function(){
        //请求状态为4和200执行判断
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
        }
    }

}

// document.getElementById("mybutton").click = function(){
//     alert("点击触发")
// }

// let button =document.querySelector('input')
// button.onclick=function(){
//     alert("233")
// }


