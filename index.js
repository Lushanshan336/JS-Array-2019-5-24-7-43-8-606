// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
alert(a instanceof Array); //false
alert(b instanceof Array); //true


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
var b=a.map(function(value){ return value * 2})
alert(b)// output [2,4,6,8,10]


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
document.write(colors[0]+"&nbsp"+colors[1]+"&nbsp"+colors[2]+"&nbsp"+colors[3]);//case 1 output: 'Red Green White Black'
document.write(colors[0]+"+"+colors[1]+"+"+colors[2]+"+"+colors[3]);// case 2 output: 'Red+Green+White+Black'
document.write(colors[0]+","+colors[1]+","+colors[2]+","+colors[3]);// case 3 output: 'Red,Green,White,Black'


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]


// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
