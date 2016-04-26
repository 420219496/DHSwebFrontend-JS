"use strict";
var count = 0;
var ph = document.getElementById("ph");
var yh = document.getElementById("yh");
ph.style.display = "none";
var obj = document.getElementById("all");
var box = obj.getElementsByTagName("div");
var shu=new Array(0,0,0,0,0,0,0,0,0);
for (var i = 0; i < box.length; i++) {
        (function(i){
        box[i].onclick =function(){
            changeColor(box[i])
        }   
    })(i)
    box[i].shu=0;
}

function changeColor(element) {
    if(element.style.backgroundColor == ""){
        if (count == 1) {
            element.style.backgroundColor = "#c9f";
            count = 0;
            ph.style.display = "none";
            yh.style.display = "block";
        } else {
            element.style.backgroundColor = "#ffc";
            count = 1;
            ph.style.display = "block";
            yh.style.display = "none";
        }

    } else {
        return false;
    }
}
