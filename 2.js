var mycars = new Array();
mycars[0] = "Benz";
mycars[1] = "Volvo";
mycars[2] = "BMW";

var myCars = new Array("Benz", "Volvo", "BMW");

var mycars = ["Benz", "Volvo", "BMW"];


var arr = ["星期日","星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
arr[0] = "Monday";
console.log(arr[0]);
console.log(arr.length);
var i;
for (i = 0; i < arr.length; i++) {
    document.write("<br>" + arr[i]);
    console.log(arr[i]);
}
document.write("<hr>");
var today = new Date();
var now = today.getDay();
document.write("今天是：" + arr[now]);

// num / 2 = x ...... 0;
// num % 2 == 0;

var sum = 0;
for(var a = 0; a<= 1000; a ++) {
	if (a % 2 == 0) {
		sum = sum + a;
	}
}
alert(sum);