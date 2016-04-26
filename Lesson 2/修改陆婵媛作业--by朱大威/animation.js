var a=document.getElementById('b').getElementsByTagName("div");
for(var i=0;i<=3;i++){
	(function(i){
		a[i].onmouseout=function(){
			off(a[i])
		}
	})(i)
}
function off(element){
	element.innerHTML='';
}
	function	on1(){
		document.getElementById("xiamu").innerHTML='<img src="img/xiamu.jpeg" width="200px" height="200px"/>';
	}
	function	on2(){
		document.getElementById("saber").innerHTML='<img src="img/saber.jpeg" width="200px" height="200px"/>';
	}
	function	on3(){
		document.getElementById("jiegeng").innerHTML='<img src="img/jiegeng.jpg" width="200px" height="200px"/>';
	}
	function	on4(){
		document.getElementById("mai").innerHTML='<img src="img/mai.jpg" width="200px" height="200px"/>';
	}