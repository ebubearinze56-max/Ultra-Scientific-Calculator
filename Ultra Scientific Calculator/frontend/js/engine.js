export function solve(expr){

    try{

        let e = expr;

        // constants
        e = e.replace(/π/g, Math.PI);
        e = e.replace(/e/g, Math.E);

        // trig (deg mode optional later)
        e = e.replace(/sin\(/g,"Math.sin(");
        e = e.replace(/cos\(/g,"Math.cos(");
        e = e.replace(/tan\(/g,"Math.tan(");

        // square root
        e = e.replace(/√/g,"Math.sqrt");

        return Function("return " + e)();

    } catch(err){
        return "Error";
    }
}