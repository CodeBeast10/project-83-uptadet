var mouseEvent="empty";
canvas= document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
mouseEvent="mousedown";
color= document.getElementById("color").value ; 
linewidth= document.getElementById("pen").value ;
radius= document.getElementById("radius").value;
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {

currentx=e.clientX-canvas.offsetLeft;
currenty=e.clientY-canvas.offsetTop;

if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= linewidth;
    ctx.arc(currentx, currenty,radius, 0, 2*Math.PI);
    ctx.stroke();
}
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e) {
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e) {
    mouseEvent="mouseleave";
}

function cleararea() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
}