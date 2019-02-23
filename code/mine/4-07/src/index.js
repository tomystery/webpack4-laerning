let button =document.createElement('button');
button.innerHTML='hello'

button.addEventListener('click',function(){
//vue懒加载 react懒加载 都是这样实现的

    //es6草案中的语法 jsonp实现动态加载文件
    //加载完返回的是一个promise,加载完以后会把东西放到data里面。
    import('./source.js').then(data => {
        console.log(data.default)
    })
});

document.body.appendChild(button);