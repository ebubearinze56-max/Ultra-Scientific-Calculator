function addHistory(text){
    let div = document.createElement("div");
    div.innerText = text;
    document.getElementById("historyList").appendChild(div);
}