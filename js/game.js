//定义全局变量上下文
var g_context;
//定义全局背景图
var g_backgound;
//定义全局的英雄
var g_hero;
// 背景图的移动速度 
var g_speed=1;
//敌机数组
var enemyArray=[];
//敌机数量
var count=0;
//子弹
var shotArray=[];
var g_over;

//// 绑定事件
window.addEventListener("keydown",keyDown,true); // 注册键盘按下事件
//window.addEventListener("keyup",keyUp,true); //注册键盘键盘弹起来 事件
//初始化画布
g_can=document.getElementById("can");
//指定2d绘图
g_context=g_can.getContext("2d");
//初始化背景图
g_backgound=new Background(0,0,"bgimg");
////初始化英雄
g_hero=new Hero(120,450,"heroimg1","heroimg2");
//g_over=new Over() ;
//设置定时器每一秒执行一次

setInterval(function(){
    //开始绘制背景
   
    g_backgound.show();
//  //开始绘制英雄
    g_hero.show();

//  count++;
//  if(count%64==0){
//      //将敌机放入数组
//  	var ran=parseInt(Math.random()*100000)%3+1;//产生一个1-3的随机数
//  	new Enemy().show(ran); 
//  }
// //循环子弹数组，让当前所有的子弹都不停的重绘
// for(var i=0;i<shotArray.length;i++){
//      var s=shotArray[i];
//		s.show();
// }
// //循环敌机数组，让当前所有的敌机都不停的重绘
// for(var i=0;i<enemyArray.length;i++){
//      var s=enemyArray[i];
//		enemyArray[i].fire();
// }
},50);
 

//键盘按下去  键盘↓键
function keyDown(e){
    //根据keyCode判断按下的是哪个键盘
    var code=e.keyCode;
     if(code==37) //左
     {
     	if(g_hero.x!=0){//防止出界
     		g_hero.x=g_hero.x-5;
     	}     	
     	
     }else if(code==39) //右
     {
     	if(g_hero.x!=255){//防止出界
     		g_hero.x=g_hero.x+5;
     		console.log(g_hero.x);
     	}
     }else if(code==40)//下
     {
     	
     	if(g_hero.y!=460){//防止出界
     		g_hero.y=g_hero.y+5;
     		console.log(g_hero.y);
     	};
     	
     }else if(code==38)//上
     {
     	if(g_hero.y!=30){//防止出界
     		g_hero.y=g_hero.y-5;
     		console.log(g_hero.y);
     	};
     }
}



//背景图刷新事件
function Background(x,y,id){
    //接收传递过来的坐标和图片
    this.x=x;
    this.y=y;
    this.img=document.getElementById(id); //背景图
    //设置下边的图
    this.x2=x;
    this.y2=-this.img.height;
}

//为当期背景对象扩展show方法
Background.prototype.show=function(){
    //绘制第一张背景图
    g_context.drawImage(this.img,this.x,this.y);
    this.y+=g_speed;
    //绘制第二张背景图  截图 两张一样的图接在一起
    g_context.drawImage(this.img,this.x2,this.y2);
    this.y2+=g_speed;
    //当第一张图移动到最下面隐藏之后，将其移动到最上面重新循环
    if(this.y>=this.img.height){
       this.y=-this.img.height;
    }
    //当第二张图移动到最左边隐藏之后，将其移动到最上面重新循环
    if(this.y2>=this.img.height){
        this.y2=-this.img.height;
    }
          
}
//创建飞机函数
function Hero(x, y, id1, id2) {
	this.x = x;
	this.y = y;
	this.count=0;
	this.img1 = document.getElementById(id1);
	this.img2 = document.getElementById(id2);

}
//画出我方飞机
Hero.prototype.show = function() {

	var img;
	this.count++;
	if (this.count % 3 == 0) {
		img=this.img1;
	} else {
		img=this.img2;
	}
	if(this.count==100){
		this.count=0;
	}
	g_context.drawImage(img,this.x,this.y);	
	
}

