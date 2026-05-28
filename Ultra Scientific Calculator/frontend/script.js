import { solve } from "./js/engine.js";

let display = document.getElementById("display");

function append(v){
    display.value += v;
}

function clearAll(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    let input = display.value;

    let result = solve(input);

    display.value = result;

    addHistory(input + " = " + result);

    drawGraph(input);

}

/* HISTORY */
function addHistory(text){
    let div = document.createElement("div");
    div.innerText = text;

    div.onclick = ()=>{
        display.value = text.split("=")[0].trim();
    };

    document.getElementById("historyList").appendChild(div);
}

/* CLOCK */
setInterval(()=>{
    document.getElementById("clock").innerText =
    new Date().toLocaleTimeString();
},1000);

/* TABS */
function showTab(id){
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}
import { explain } from "./js/ai.js";

function showExplain(){
    let input = display.value;
    document.getElementById("aiBox").innerText = explain(input);
}