/* console.log('index')

class Log{
    constructor(){
        console.log('出错了ssssdssss')
    }

}

let log=new Log(); */ 

// 现在开启的服务是不一样的，我们现在想的是转发一下不就可以了。
//localhost:8080 -> 3000，那么这个问题就解决了
//http:proxy

let xhr=new XMLHttpRequest();
xhr.open('GET','/user',true);
xhr.onload=function(){
    console.log(xhr.response);
}

xhr.send();