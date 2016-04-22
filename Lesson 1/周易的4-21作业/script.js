"use strict";
function getText(){
    var input_text = document.getElementById("input-text");
    var text = input_text.value;
    return text;
}

function createDanMu(text){
    var dan_mu = document.createElement("p");
    dan_mu.setAttribute("class","dan-mu")
    dan_mu.innerText = text;
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
        handle();
    }
}

fire();
