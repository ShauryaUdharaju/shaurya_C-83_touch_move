
var lastPositionOfX, lastPositionOfY

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

color="black"
widthOfLine=2

var width=screen.width
   new_width=width - 70
var height=screen.height
   new_height=height - 300

if (width<992){
document.getElementById("myCanvas").width=new_width
document.getElementById("myCanvas").height=new_height
document.body.style.ovewflow="hidden"
}

canvas.addEventListener("touchstart", my_touch_start)
function my_touch_start(e){
    console.log("my_touch_start")
   lastPositionOfX=e.touches[0].clientX-canvas.offsetLeft
   lastPositionOfY=e.touches[0].clientY-canvas.offsetTop
}



canvas.addEventListener("touchmove", my_touch_move)
function my_touch_move(e){
    currentPositionOfTouch_X=e.touches[0].clientX-canvas.offsetLeft
    currentPositionOfTouch_Y=e.touches[0].clientY-canvas.offsetTop


    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=widthOfLine
    
    ctx.moveTo(lastPositionOfX, lastPositionOfY)
    ctx.lineTo(currentPositionOfTouch_X, currentPositionOfTouch_Y)
    ctx.stroke()

   lastPositionOfX=currentPositionOfTouch_X
   lastPositionOfY=currentPositionOfTouch_Y
}