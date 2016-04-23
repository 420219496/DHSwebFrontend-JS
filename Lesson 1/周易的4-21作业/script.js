"use strict";
function getText(){
    var input_text = document.getElementById("input-text");
    var text = input_text.value;
    if (text.length > 15) {
        alert("抱歉我记不住15个以上的字请重新输入_(:3 」∠ )_");
        return "";
    }
    else
        return text;
}

function createDanMu(text){
    var dan_mu = document.createElement("p");
    dan_mu.setAttribute("class","dan-mu")
    dan_mu.innerText = text;
    var y_position = Math.random()*400;
    dan_mu.style.top = y_position+"px";
    return dan_mu;
}

function appendDanMu(element){
    var vedio = document.getElementById("dan-mu-wrap");
    vedio.appendChild(element);
}

function handle(){
    var text = getText();
    var dan_mu = createDanMu(text);
    appendDanMu(dan_mu);
}

function fire(){
    var button = document.getElementById("fire");
    button.onclick = function(){
        var parent = document.getElementById("dan-mu-wrap");
        var child = parent.getElementsByTagName("p");
        if (child[0]) {
            parent.removeChild(child[0]);
        }
        handle();
        document.getElementById("input-text").value = "";
    }
}

fire();
