// console.log("hello world");
// console.log(9527*2333);
// document.write("hello world");
// document.write(9527*2333);
// window.alert("hello world");
// window.alert(9527*2333);
// var name = window.prompt("请输入你的名字","张三");
// window.alert("欢迎你，" + name);

// var num;
// num = 9527;

// var str = "hello";

// var a = 1,b = 2,c = 3;

// if (true) {
// code
// }

// 0 < score < 60
// && 且
var score = window.prompt("请输入你的成绩：", 0);
if (score <= 0 && score < 60) {
    document.write("不及格");
} else if (score <= 60 && score < 80) {
    document.write("及格");
} else if (score <= 80 && score < 90) {
    document.write("良好");
} else if (score <= 90 && score <= 100) {
    document.write("优秀");
} else {
    document.write("请输入合法的成绩。");
}
