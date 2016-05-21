var count = 0;
var x=0;
var ph = document.getElementById("ph");
var yh = document.getElementById("yh");
ph.style.display = "none";
var obj = document.getElementById("all");
var box = obj.getElementsByTagName("div");
for (var i = 0; i<9; i++) {
    box[i].shuju=2;
}
for (var i = 0; i < box.length; i++) {
    (function(i){
        box[i].onclick = function() {
            changeColor(box[i]);
        }
    })(i);
}
function changeColor(element) {
    if(element.style.backgroundColor == ""){
        if (count == 1) {
            element.style.backgroundColor = "#f0f";
            count = 0;
            element.shuju=1;
            ph.style.display = "none";
            yh.style.display = "block";
        } 
        else {
            element.style.backgroundColor = "#ff0";
            count = 1;
            element.shuju=0;
            ph.style.display = "block";
            yh.style.display = "none";
            var t=setTimeout("timedCount()",1000);    
            function timedCount()  {
                var tim=document.getElementById("hj");
                var time=tim.innerHTML;
                document.getElementById("hj").innerHTML = time;
                if( t !=null && time==0){clearTimeout(t);alert("黄方超时，紫方赢");firm();return;}
                time--;
                tim.innerHTML = time;
                t=setTimeout("timedCount()",1000)
}    
        }
    } else {
        return false;
    }
    x++;
    if((box[0].shuju==1&&box[1].shuju==1&&box[2].shuju==1)||(box[3].shuju==1&&box[4].shuju==1&&box[5].shuju==1)||(box[6].shuju==1&&box[7].shuju==1&&box[8].shuju==1)||(box[0].shuju==1&&box[4].shuju==1&&box[8].shuju==1)||(box[2].shuju==1&&box[4].shuju==1&&box[6].shuju==1)||(box[0].shuju==1&&box[3].shuju==1&&box[6].shuju==1)||(box[1].shuju==1&&box[4].shuju==1&&box[7].shuju==1)||(box[2].shuju==1&&box[5].shuju==1&&box[8].shuju==1)){
        alert("紫方赢");
        firm();
    }
    if((box[0].shuju==0&&box[1].shuju==0&&box[2].shuju==0)||(box[3].shuju==0&&box[4].shuju==0&&box[5].shuju==0)||(box[6].shuju==0&&box[7].shuju==0&&box[8].shuju==0)||(box[0].shuju==0&&box[4].shuju==0&&box[8].shuju==0)||(box[2].shuju==0&&box[4].shuju==0&&box[6].shuju==0)||(box[0].shuju==0&&box[3].shuju==0&&box[6].shuju==0)||(box[1].shuju==0&&box[4].shuju==0&&box[7].shuju==0)||(box[2].shuju==0&&box[5].shuju==0&&box[8].shuju==0)){
        alert("黄方赢");
        firm();
    }
    if(x==9){
        alert("平局");
        firm();
    }
}
function firm()
{
    if(confirm("你想要继续战斗吗？"))
    {
         location.replace(location.href);
     }
    else
    {
         alert("不行，你不能走o.o");
         firm();
     }
}






 /*           var t=setTimeout("timedCount()",1000);    
            function timedCount()  {
                var tim=document.getElementById("hj");
                var time=tim.innerHTML;
                document.getElementById("hj").innerHTML = time;
                if( t !=null && time==0){clearTimeout(t);alert("黄方超时，紫方赢");firm();return;}
                time--;
                tim.innerHTML = time;
                t=setTimeout("timedCount()",1000)
}    
//jishiqi  紫方
var t=setTimeout("timedCount()",1000);    
function timedCount()  {
    var tim=document.getElementById("zj");
    var time=tim.innerHTML;
    document.getElementById("zj").innerHTML = time;
    if( t !=null && time==0){clearTimeout(t);alert("紫方超时，黄方赢");firm();return;}
    time--;
    tim.innerHTML = time;
    t=setTimeout("timedCount()",1000)
}
    <div class="jishi shake shake-constant" id="hj">10</div>
    <div class="jishi shake shake-constant" id="zj">10</div>*/
