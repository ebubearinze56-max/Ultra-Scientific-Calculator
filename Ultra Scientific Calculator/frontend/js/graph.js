let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 300;

export function drawGraph(expr){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.beginPath();

    for(let x=-100;x<100;x++){

        let y;

        try{
            let e = expr.replace(/x/g, x/10);
            y = Function("return " + e)();
        } catch{
            return;
        }

        let px = x + 200;
        let py = 150 - y * 20;

        if(x === -100) ctx.moveTo(px,py);
        else ctx.lineTo(px,py);
    }

    ctx.strokeStyle = "#00ffff";
    ctx.stroke();
}