// import calc from './test';
//import 在生产环境只能中会自动删除不用的代码
//tree shaking

//require语法要想删除怎么办呢？,es6模块会把结果放到default上面
let calc = require('./test')
console.log(calc)


//scope hosting 作用域提示
let a=1;
let b=2;
let c=3;
let d=a+b+c;//在webpack中自动省略一些可以简化的代码
console.log(d,'--------------');

console.log(calc.default.sum(1,2))