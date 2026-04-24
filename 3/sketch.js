let windowHeight = window.innerHeight;
let windowWidth = window.outerWidth;
let canvasContainer = document.querySelector('#canvas-container'); 
let body, background; 

let sketch = canvas => { 
  canvas.preload = function() {
    body = canvas.loadImage('img/body.png');
    background = canvas.loadImage('img/trapeangthma.jpg'); 
  };

  //creates canvas  
  canvas.setup = () => {   
    console.log("Setup");
    noCanvas();
    canvas.createCanvas(windowWidth, windowHeight); 
  };  
  
  //draw function  
  canvas.draw = () => {   
    console.log("Draw");
    //canvas.background('#E9DCCF');
    canvas.background(100);
    canvas.frameRate(60); 
    
    x = map(pmouseX, 0, windowWidth, 0, 50);  
	  y = map(pmouseY, 0, windowHeight, 0, 50);

    background.filter(GRAY);
    canvas.image(background, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    canvas.image(body, windowWidth/2 - x, windowHeight/2 - y);
    

    canvas.imageMode(CENTER);
  };
  
  //extra function syntax: canvas.functName = function() {}
};

function setup() {  
  new p5(sketch, canvasContainer);
}