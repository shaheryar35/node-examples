
var react=require('./reactangle')
function solveRect(l,b){
    console.log("Length Is = "+l+" and b ="+b)
    react(l,b,(err,reactangle)=>{
        if(err){
            console.log("ERROR: ", err.message);
        }
    else{
        console.log("The area of the rectangle of dimensions l = "
        + l + " and b = " + b + " is " + reactangle.area());
    console.log("The perimeter of the rectangle of dimensions l = "
        + l + " and b = " + b + " is " + reactangle. perimeter());
    }
    });
};
solveRect(2,5);
solveRect(0,5);
solveRect(-3,5);

