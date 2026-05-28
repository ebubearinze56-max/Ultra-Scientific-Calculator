export function explain(expr){

    if(expr.includes("sin")){
        return "This is a sine function representing wave motion.";
    }

    if(expr.includes("cos")){
        return "This is a cosine function used in oscillations.";
    }

    if(expr.includes("tan")){
        return "This represents slope/angle relationship.";
    }

    return "Standard mathematical expression.";
}