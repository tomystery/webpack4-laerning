import jquery from 'jquery';
import moment from 'moment';

//设置语言
moment.locale('zh-cn');

//手动引入所需要的语言包 因为dullPlugin再配置里面并没有引用它
import 'moment/locale/zh-cn'

let r=moment().endOf('day').fromNow();
console.log(r)