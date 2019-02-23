//file-loader默认会在内部生成一张图片到build目录下
//把生成的图片的名字返回回来
import './index.css'
import logo from './2.png' //把图片引入，返回的结果是一个新的图片地址
let image =new Image()
image.src=logo
document.body.appendChild(image)