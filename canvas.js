
//global variable to store each lines
//make it so that audios cant play on top of each other
//algorithm for chord/melodies
//clearer and nicer sounds (i want synths)
//nice buttons and graphics
//line width by speed
//pastel colour pallet maybe
//interact with lines potentially by sin waves or just change to black
//please organise the code its a mess
//remove the global variables
//experiment with babel
//order notes should be played in --> merge sore or bubble sort?
// java script doesnt have static/dynamic lists should i make it that
//c7,f7,g7
//indie sounds
//bass line or percussion
let lines = [];

let xStart = [];


let xCoOrds = [];
let yCoOrds = [];
let color = "blue";
var c3 = new Audio('./sounds/c3ukulele.mp3');
var g4 = new Audio('./sounds/g4ukulele.mp3');
var f4 = new Audio('./sounds/f4ukulele.mp3');
var e4 = new Audio('./sounds/e4ukulele.mp3');
var d4 = new Audio('./sounds/d4ukulele.mp3');
var c4 = new Audio('./sounds/c4ukulele.mp3');
var g2 = new Audio('./sounds/g4ukulele.mp3');
var f2 = new Audio('./sounds/f4ukulele.mp3');
let yStart = [];
console.log(yStart);
//var g3 = new Audio('./sounds/g3ukulele.mp3');
//var f3 = new Audio('./sounds/f3ukulele.mp3');

var play = true;
var scale = [c3,g4,f4,e4,d4,c4,g2,f2];




window.addEventListener('load', () => {
    const canvas = document.querySelector("canvas")
    const red = canvas.getContext("2d");
    

    //resizing
    canvas.height = window.innerHeight;
     
    //console.log(bracket);
    canvas.width = window.innerWidth;
    var bracket = sectioning(window.innerHeight);
    
    const ctx = canvas.getContext("2d"); 
    
    //variables
    let painting = false;
    
    function startPosition(e){
        xStart.push(e.clientX);
        yStart.push(e.clientY);
        //console.log(yStart[yStart.length - 1]);
        yStart[yStart.length-1] = soundConverter(yStart[yStart.length - 1],bracket);
        scale[yStart[yStart.length-1]].play();
        order(xStart,yStart);
        
        
    
       
        //console.log("x coordinate of line drawn is");
        //console.log(xStart);
        //console.log("y coordinate of line drawn is");
        //console.log(yStart);
        painting = true;
        draw(e);
    }
    function finishedPosition() {
        
        painting = false;
        //console.log(yStart);
        lines.push(ctx);
        //console.log(xCoOrds);
        //console.log(yCoOrds);
        //interactions();
        //console.log(lines);
        ctx.beginPath();
    }
    function interactions(){

        var i;
        for (i = 1; i < xCoOrds.length; i++) {
            red.strokeStyle = "red";
            red.beginPath();
            red.moveTo(xCoOrds[i-1], yCoOrds[i-1]);
            //console.log(xCoOrds);
            //console.log(lines);
            red.lineTo(xCoOrds[i], yCoOrds[i]);
            red.stroke();  
        }
    }
    function draw(e){
        //console.log(color);
        if(!painting) return;
        
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.strokeStyle = color; 
        ctx.lineTo(e.clientX, e.clientY);
        
        ctx.stroke();
        
        ctx.beginPath();
        
        xCoOrds.push(e.clientX);
        yCoOrds.push(e.clientY);
        

        

        
        ctx.moveTo(e.clientX, e.clientY);
        
        //console.log(xCoOrds);
        
        
       
        //console.log(yCoOrds);
        
        //create an array store coordinates of strokes
        
    }
    
    
      
    
   


    //event listeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    //music.addEventListener('ended',function(){
        //play next song
      //});
   
    
    

        
    
});
function red(){
    //console.log(color);
    color = "red";
    //console.log(color);
}
function blue(){
    //console.log(color);
    color = "blue";
    //console.log(color);
}
function yellow(){
    //console.log(color);
    color = "yellow";
    //console.log(color);
}

function start(melody,scale){
    
    
    
    for (let i = 0; i < melody.length; i++) {
        
        setTimeout(() => scale[melody[i]].play(), (i+1)*1000);
    
    } 
    
    //console.log("c");
    
    //
    //setTimeout(() => d4.play(), 1000);
    //console.log("d");
    
    
}



/* function pause(){
    play = False;
} */
function soundConverter(Ypos,bracket){
    //rounds to the nearest number
    var note = Math.ceil(Ypos/bracket)-1;
    
    //console.log(note);
    return note;
}

function sectioning(innerHeight){
    //console.log(innerHeight);
    var bracket = innerHeight/8
    return bracket;
}


 
function order(x,y) {
    console.log(x);
    console.log(y);
	for (let i = 0; i < x.length; i++) {
		for (let j = 0; j < x.length; j++) {
			if (x[j] > x[j + 1]) {
                x[j] = x.splice(j+1, 1, x[j])[0];
                y[j] = y.splice(j+1, 1, y[j])[0];
				
			}
        }
        
	}
	console.log(x);
    console.log(y);
}

//var canvas = document.getElementById("canvas");
/* var ctx = canvas.getContext("2d");
ctx.strokeStyle = "Green";
var posY = 0;
var lineLength = 10;
var speed = 2;

function drawLine() {
	ctx.beginPath();
  ctx.moveTo(10, posY);
  ctx.lineTo(10, posY+lineLength);
  ctx.stroke();
}

function moveLine () {
	posY += speed;
  
  if (posY < 0 || posY > canvas.height) {
	  speed = speed * -1;
  }
}

function loop() {
	// clear old frame;
  ctx.clearRect(0,0,canvas.width, canvas.height);
  moveLine();
  drawLine();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
 */