let url =' ';
if(DEV){
    url="http://localhost:3000"
}else{
    url="http://www.baidu.com"
}
console.log(url,DEV)
console.log(typeof FLAG)
console.log(typeof EXPRESSION)

//那么上面的dev是从那里来的，从webpack定义的变量