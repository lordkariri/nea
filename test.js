let color = "blue";
let lines = [];
(function(){
    var a=[];
    var lastT=0;
    var tLastAnimate=0;
    //var info="";
    var perf = window.performance;
    let painting = false;
    var ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    
     
    //console.log(bracket);
    canvas.width = window.innerWidth;
    
    //var bracket = sectioning(window.innerHeight);
  
    //--------------------------------------------------------------------------------
    function tick() {
      return perf.now();
      }
    //--------------------------------------------------------------------------------
    function onMouseMove( e ) {
      onMove( e.timeStamp, e.clientX, e.clientY );
      }
    //--------------------------------------------------------------------------------
    
    //--------------------------------------------------------------------------------
    function onMove( ets, clientX, clientY ) {
      var ts = ets;
      
      var r = canvas.getBoundingClientRect();
      var x = (clientX-r.left)/(r.right-r.left)*canvas.width;
      var y = (clientY-r.top)/(r.bottom-r.top)*canvas.height;
      a[a.length] = {t:ts, x:x, y:y, off:ts-tLastAnimate, delta:ts-lastT};  // Chrome bug: # too large causes problem
      lastT = ts;
      while ((ts-a[0].t)>=1000) {
        a.shift();
        }
      }
      //------------------------------------------------------------------------------
    function getMouseDistance(ms) {
      var now = tick();
      var l1 = a.length-1;
      while ((l1>0) && (now-a[l1].t<80)) {
        --l1;
        }
      if (l1>0) {
        var a1 = a[l1];
        var a2 = a[a.length-1];
        return { x:(a2.x-a1.x)/(a2.t-a1.t)*ms, y:(a2.y-a1.y)/(a2.t-a1.t)*ms};
        }
      return {x:0,y:0};
      }
  
  
    function animate( tAnimate ) {
      var prev = tLastAnimate;
      tLastAnimate =  tAnimate;
      var ofd = prev ? getMouseDistance(tLastAnimate-prev) : null;
  
  
  
  
      window.requestAnimationFrame(animate);
  
    
  
      
  
      
      
      if(!painting) return;
      if (a.length>0) {
  
        if (ofd) {
  
          // blue circle at one frame distance
          var jj = getMouseDistance(Math.max(0,tLastAnimate-a[a.length-1].t));
          var mx = a[a.length-1].x+jj.x;
          var my = a[a.length-1].y+jj.y;
          //console.log(2*Math.sqrt(ofd.x*ofd.x+ofd.y*ofd.y));
          //console.log((ofd.x*ofd.x+ofd.y*ofd.y));
          ctx.lineWidth = (3*Math.sqrt(ofd.x*ofd.x+ofd.y*ofd.y));
          ctx.lineCap = "round";
          ctx.strokeStyle = color; 
          ctx.lineTo(mx, my);
        
          ctx.stroke();
        
          ctx.beginPath();
        
        

        

        
          ctx.moveTo(mx, my);
          ctx.beginPath();
          
          //ctx.arc( mx, my, 2*Math.sqrt(ofd.x*ofd.x+ofd.y*ofd.y), 0, 2*Math.PI );
          
          //ctx.fillStyle = color;
          //ctx.fill();
          
          
          }
  
        // mouse path
        
  
        
        }
      }
    //--------------------------------------------------------------------------------
    
    //--------------------------------------------------------------------------------
    
      function startPosition(e){
          painting = true;
          
      }
      function finishedPosition() {
          
          painting = false;
          lines.push(ctx);
          console.log(lines);
          
      }
    function init() {
      canvas.addEventListener( "mousemove", onMouseMove, false );
      canvas.addEventListener("mousedown", startPosition);
      canvas.addEventListener("mouseup", finishedPosition);
      
      animate();
      }
    
    init();
    })();
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
    console.log(color);
  color = "yellow";
    console.log(color);
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


}