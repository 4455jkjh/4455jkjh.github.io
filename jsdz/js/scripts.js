var dz,wd,jz,bjz,wc,hint;
dz = document.getElementById("dz");
wd = document.getElementById("wd");
jz = document.getElementById("jz");
bjz = document.getElementById("bjz");
wc = document.getElementById("wc");
hint = document.getElementById("hint");

function qkdz() {
	//alert("清空电阻");
	dz.value = "";
}
function qkwd() {
	//alert("清空电阻");
	wd.value = "";
}
function qkjz() {
	//alert("清空电阻");
	jz.value = "";
}
function qkAll() {
	qkdz();
	qkwd();
	qkjz();
}
function input() {
	//alert("input");
	var dianzu=dz.value;
	var wendu=wd.value;
	var jizhun=jz.value;
	var bijiaozhi=dianzu * 309.5 / (234.5 + wendu*1);
	var wucha=(bijiaozhi*1 / jizhun*1 - 1) * 100;
	bjz.value = "比较值：" + bijiaozhi.toFixed(5);
	wc.value = "误差：" + wucha.toFixed(5) + "%";
	//hint.value = "dz:" + dianzu + "\nwd:" + wendu + "\njz:" + jizhun;
}
