"use strict";
var count = 0;
var ph = document.getElementById("ph");
var yh = document.getElementById("yh");
ph.style.display = "none";
var obj = document.getElementById("all");
var box = obj.getElementsByTagName("div");
for (var i = 0; i < box.length; i++) {
    (function(i) {
        box[i].onclick = function() {
            changeColor(box[i]);
        }
    })(i)
}

function changeColor(element) {
    if(element.style.backgroundColor == ""){
        if (count == 1) {
            element.style.backgroundColor = "rgb(136, 75, 205)";
            count = 0;
            ph.style.display = "none";
            yh.style.display = "block";
        } else {
            element.style.backgroundColor = "rgb(213, 113, 32)";
            count = 1;
            ph.style.display = "block";
            yh.style.display = "none";
        }
    } else {
        return false;
    }
}