var dz,wd,jz,bjz,wc;
dz = document.getElementById("dz");
wd = document.getElementById("wd");
jz = document.getElementById("jz");
bjz = document.getElementById("bjz");
wc = document.getElementById("wc");

function qkdz() {
	dz.value = "";
	input();
}
function qkwd() {
	wd.value = "";
	input();
}
function qkjz() {
	jz.value = "";
	input();
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
	if (!dianzu || !wendu || !jizhun)
	{
		bjz.value = "比较值：";
		wc.value = "误差：";
		return;
	}
	var bijiaozhi=dianzu * 309.5 / (234.5 + wendu * 1);
	var wucha=(bijiaozhi * 1 / jizhun * 1 - 1) * 100;
	bjz.value = "比较值：" + bijiaozhi.toFixed(5);
	wc.value = "误差：" + wucha.toFixed(5) + "%";
}
