a=a.split(",");
		var pin={};
		var maxpin='';
		var key;
		for(var i=0;i<a.length;i++){
			var char=a[i];
			if(!pin[char]){
				pin[char]=0;
			}
			pin[char]++;
		}
		
		for(key in pin){
			if(maxpin==''||pin[key]>pin[maxpin]){
				maxpin=key;
			}
		}
		alert(maxpin);//output: 'a'// 阅读推荐的链接，复习JavaScript中数组的相关方法

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
function sortNumber(a,b){return b - a}
document.write(a.sort(sortNumber))// output: [10,8,5,4,1]


// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var obj = {};// 声明一个空对象    
    for (var i = 0; i < a.length; i++) {    //遍历数组         
        var key = a[i];           //声明一个key接收数组中的每一个值           
        if (obj[key]) {           //判断 如果对象中有这个属性 个数加一 如果没有 添加这个属性
                obj[key]++;
            } 
	else {
                obj[key] = 1;
            }
        }     
        var Count = 0;            //定义最大的次数 以及 最大字符串的key
        var maxString = "";        
        for (var key in obj) {    // for in 既可以枚举对象也可以枚举数组，枚举出来的是key(数组的key是0,1,2...)
            // console.log(key+"="+obj[key]);
            // console.log(key);
            if (Count < obj[key]) {
                Count = obj[key];
                String = key;
            }
        }
        alert(String);           //String是最多频次的元素 Count是最多出现了多少次
                                 //output: 'a' a是出现最多的元素
	</script>
</head>
<body>
</body>
</html>
