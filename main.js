var ultimaposicionx, ultimaposiciony;
var color="black";
var anchodelinea=1;
canvas=document.getElementById('micanvas');
ctx=canvas.getContext("2d");
var width=screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;
if(width<992){
    document.getElementById("micanvas").width=newwidth;
    document.getElementById("micanvas").height=newheight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",mitouchstart);
function mitouchstart(e){
    console.log("mitouchstart");
    color=document.getElementById("color").value;
    anchodelinea=document.getElementById("anchodelinea").value;
    ultimaposicionx=e.touches[0].clientX-canvas.offsetLeft;
    ultimaposiciony=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", mitouchmove);
function mitouchmove(e){
    console.log("mitouchmove");
    actualposicionx=e.touches[0].clientX-canvas.offsetLeft;
    actualposiciony=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=anchodelinea;
    console.log("cordenadas de ultimaposicion x y y: ");
    console.log("x= "+ultimaposicionx+" y= "+ultimaposiciony);
    ctx.moveTo(ultimaposicionx, ultimaposiciony);
    console.log("cordenadas de actualposicion x y y: ");
    console.log("x= "+actualposicionx+" y= "+actualposiciony);
    ctx.lineTo(actualposicionx, actualposiciony);
    ctx.stroke();
    ultimaposicionx=actualposicionx;
    ultimaposiciony=actualposiciony;
}
function limpiar(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}