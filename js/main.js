    //获得开始界面
var homePage=document.getElementById("homePage");
	//获得模式选择页面
var patternPage=document.getElementById("patternPage");
	//获得关卡选择模式页面
var checkpointPage=document.getElementById("checkpointPage");
	//获得画布
var g_can=document.getElementById("can");


//初始设置
can.style.display="block";
homePage.style.display="none";
patternPage.style.display="none";
checkpointPage.style.display="none";


function begin(){
	homePage.style.display="none";
	patternPage.style.display="block";
}
function normal(){
	patternPage.style.display="none";
	checkpointPage.style.display="block";
}
function nStart(){
	checkpointPage.style.display="none";
	can.style.display="block";
}
