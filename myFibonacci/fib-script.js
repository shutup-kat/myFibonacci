/*uses fibonacci algorithm to draw a flower in canvas*/

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';
hue = Math.random() * 360; //for rainbow coloring
flowers = Math.random() * 360;

/* draws a rectangle  fillRect(x coord, y coord, height, width) */
//x and y are the coords to where it will show up on the window.
// ctx.fillRect(0, 0, 100, 100);

let track = 0;
let scale = 10;


/*code used for drawing, put into its own func for clean code*/
function drawFlower(){
  /*xpt and ypt are randomized so that the particle's path is random*/

  /*changes values passed to the arc function*/
  let angle = track * flowers; //change number to change flower
  let radius = scale * Math.sqrt(track);

  let posx = radius * Math.sin(angle) + canvas.width/2;
  let posy = radius * Math.cos(angle) + canvas.height/2;


  /* draws a circle */
  ctx.fillStyle = 'hsl('+ hue +', 100%, 80%)';
  /*
  rainbow colors:
  ctx.fillStyle =
  'hsl(500, 100%, 50%)'; or 'hsl('+ hue +', 100%, 50%)';
  hsl(number between (0-360)hue, saturation, lightness)
  */
  ctx.strokeStyle = 'hsl('+ hue +', 100%, 80%)';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(posx, posy, track, 0, Math.PI * 2);
  // arc(x coord, y coord, radius, start ang, end ang)
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  track ++;
  hue ++;
}

function animate(){
  //use recusion to loop function call
  /*deletes old frames so that the animation doesn't leave a trail*/
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  //clearRect (x, y, width, height)
  if(track > 800){return;}
  drawFlower();
  requestAnimationFrame(animate);
}
animate();
