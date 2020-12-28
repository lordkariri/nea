const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
ctx.beginPath();
ctx.moveTo(0,canvas.height/2);
for (let i = 0; i < canvas.width; i++) {
    ctx.lineTo(i,canvas.height/2 + Math.sin(i*0.01) *100);
    
}

ctx.stroke()