let windowHeight = window.innerHeight;
let windowWidth = window.outerWidth;
let canvasContainer = document.querySelector('#canvas-container'); 
let backgroundImg; 
let textArr = [
  "● feeling", 
  "● reaching",
  "● wanting",
  "● belonging",
  "● looking",
  "● waiting",
  "● searching",
  "● seeking",
  "● finding"
];

let sketch = canvas => { 
  canvas.preload = function() {
    backgroundImg = canvas.loadImage('img/kol-i-dang.png');
  };

  //creates canvas  
  canvas.setup = () => { 
    noCanvas();  
    canvas.createCanvas(windowWidth, windowHeight); 
  };  
  
  //draw function  
  canvas.draw = () => {   
    console.log('draw');
    canvas.frameRate(5);
    canvas.background('#eae151');
    
    canvas.image(backgroundImg, windowWidth/2, windowHeight/2, 1000, 500);
    canvas.imageMode(CENTER);

    frameRate(1);
    let p = createP(random(textArr));
    p.position(random(0, windowWidth-100), random(0, windowHeight-100));
    
  };
};

function setup() {  
  new p5(sketch, canvasContainer);
}